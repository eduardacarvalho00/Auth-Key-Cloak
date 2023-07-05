import { Link } from "react-router-dom";
import NotFoundPage from "@assets/notFound.svg";
import { Flex, Heading, Image, Link as ChakraLink } from "@chakra-ui/react";

export function NotFound() {
	return (
		<Flex direction="column" justify="center" align="center" h="100vh">
			<title>404</title>

			<Image src={NotFoundPage} alt="404" h="45rem" mb="4rem" />
			<Heading fontSize="2rem">
				Página não encontrada, para voltar clique
				<ChakraLink color="cyan.200">
					<Link to="/"> aqui</Link>
				</ChakraLink>
			</Heading>
		</Flex>
	);
}
