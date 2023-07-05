import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
	localStorageKey,
	LocalStorageKeyProps,
} from "@constants/localStorageKey";
import { login, setAuthToken } from "@api/axiosInstance";
import { AppError } from "@errors/AppError";
import { AccountInfoProps } from "@interfaces/user";
import { sendTokenToStorage } from "@utils/sendTokenToStorage";

interface Props {
	children: ReactNode;
}

interface AuthData {
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => void;
	accountInfo: AccountInfoProps;
	handleIsLoading: (state: boolean) => void;
	isLoading: boolean;
}

const AuthContext = createContext({} as AuthData);

export const AuthProvider = ({ children }: Props) => {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	const handleIsLoading = (state: boolean) => {
		setIsLoading(state);
	};

	const [accountInfo, setAccountInfo] = useState<AccountInfoProps>({
		isAuthenticated: false,
		refresh_token: "",
		token: "",
		user: {
			email: "",
			name: "",
		},
	});

	const signIn = async (email: string, password: string) => {
		try {
			const { token, refresh_token } = await login({ email, password });

			sendTokenToStorage({ token, refresh_token });

			setAccountInfo({
				user: {
					email: "email example",
					name: "name example",
				},
				refresh_token,
				token,
				isAuthenticated: true,
			});

			setAuthToken(token);
		} catch (err: any) {
			throw new AppError(err.response.data.message, err.response.status);
		} finally {
			handleIsLoading(false);
		}
	};

	const signOut = () => {
		localStorage.removeItem(localStorageKey);
		setAccountInfo({
			isAuthenticated: false,
			refresh_token: "",
			token: "",
			user: {
				email: "",
				name: "",
			},
		});
		navigate("/");
	};

	useEffect(() => {
		(async function loadAuthState(): Promise<void> {
			try {
				handleIsLoading(true);

				const storage = localStorage.getItem(localStorageKey);

				if (storage) {
					const { token, refresh_token } = JSON.parse(
						storage,
					) as LocalStorageKeyProps;

					setAuthToken(token);

					// const { email, name, roles } = await getUserData();

					setAccountInfo({
						isAuthenticated: true,
						token,
						refresh_token,
						user: {
							email: "email example",
							name: "name example",
						},
					});
				}
			} catch {
				signOut();
			} finally {
				handleIsLoading(false);
			}
		})();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				accountInfo,
				handleIsLoading,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
