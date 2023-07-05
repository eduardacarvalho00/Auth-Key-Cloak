import { localStorageKey } from "@constants/localStorageKey";
import { AccountInfoProps } from "@interfaces/user";
import { sendTokenToStorage } from "@utils/sendTokenToStorage";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
});

interface ILogin {
	email: string;
	password: string;
}

export interface CreateExampleBody {
	name: string;
}

export function setAuthToken(token: string) {
	if (axiosInstance.defaults.headers) {
		axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
	}
}

export async function login(body: ILogin) {
	const { data } = await axiosInstance.post("login", body);

	return data;
}

export async function getExample(params = {}) {
	const { data } = await axiosInstance.get("example", { params });

	return data;
}

export async function createExample(body: CreateExampleBody) {
	const { data } = await axiosInstance.post("example", body);

	return data;
}

let isRefreshing = false;
let failedRequestsQueue: any = [];

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const storage = localStorage.getItem(localStorageKey);
		const isError400 = error.response?.status === 400;
		const isJwtExpired = error.response?.data.message === "jwt expired";

		if (storage) {
			const { refresh_token } = JSON.parse(storage) as AccountInfoProps;

			if (isError400 && isJwtExpired) {
				const originalConfig = error.config;

				if (!isRefreshing) {
					isRefreshing = true;

					axiosInstance
						.get("refreshToken", {
							headers: { refresh_token: `Bearer ${refresh_token}` },
						})
						.then((response) => {
							const { token } = response.data;

							sendTokenToStorage({ token, refresh_token });

							setAuthToken(token);

							failedRequestsQueue.forEach((request: any) =>
								request.onSuccess(token),
							);
							failedRequestsQueue = [];
						})
						.catch((err) => {
							failedRequestsQueue.forEach((request: any) =>
								request.onFailed(err),
							);
							failedRequestsQueue = [];
						})
						.finally(() => {
							isRefreshing = false;
						});
				}

				return new Promise((resolve, reject) => {
					failedRequestsQueue.push({
						onSuccess: (token: string) => {
							originalConfig.headers["Authorization"] = `Bearer ${token}`;
							resolve(axiosInstance(originalConfig));
						},
						onFailed: (err: AxiosError) => {
							reject(err);
						},
					});
				});
			}

			return Promise.reject(error);
		}

		return Promise.reject(error);
	},
);
