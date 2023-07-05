import { Flex } from "@chakra-ui/react";
import { Button } from "@components/Button";
import { useKeycloak } from "@react-keycloak/web";

export function Login() {
	const { keycloak } = useKeycloak();
	return (
		<Flex h="100vh" w="100vw" align="center" justify="center">
			<Button text="Login" onClick={() => keycloak.login()} />
		</Flex>
	);
}
