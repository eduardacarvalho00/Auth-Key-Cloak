export interface AccountInfoProps {
	isAuthenticated: boolean;
	refresh_token: string;
	token: string;
	user: {
		email: string;
		name: string;
	};
}
