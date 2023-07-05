import { localStorageKey } from "@constants/localStorageKey";

interface SendTokenToStorageProps {
	token: string;
	refresh_token: string;
}

export const sendTokenToStorage = ({
	token,
	refresh_token,
}: SendTokenToStorageProps) => {
	localStorage.setItem(
		localStorageKey,
		JSON.stringify({
			refresh_token,
			token,
		}),
	);
};
