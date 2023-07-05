import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Button } from "@components/Button";
import { useKeycloak } from "@react-keycloak/web";

export function Home() {
	const { keycloak } = useKeycloak();

	return (
		<Flex h="100vh" align="center" justify="center" flexDir="column">
			<Box m={5}>
				<Heading>hi! {keycloak.tokenParsed?.given_name}</Heading>
				<Text>your email: {keycloak.tokenParsed?.email}</Text>
				<Text>realm name: {keycloak.realm}</Text>
				<Text>client Id: {keycloak.clientId}</Text>
			</Box>
			<Button text="Logout" onClick={() => keycloak.logout()} />
		</Flex>
	);
}
