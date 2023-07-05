import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import { AuthProvider } from "@contexts/useAuth";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { ReactNode } from "react";
import { keycloak } from "@utils/keycloak";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<ReactKeycloakProvider authClient={keycloak}>
					<BrowserRouter>
						<AuthProvider>{children}</AuthProvider>
					</BrowserRouter>
				</ReactKeycloakProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
};
