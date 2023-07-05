import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import { AuthProvider } from "@contexts/useAuth";
import { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<AuthProvider>{children}</AuthProvider>
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	);
};
