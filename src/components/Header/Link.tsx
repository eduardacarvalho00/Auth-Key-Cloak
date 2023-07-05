import { Box } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";

interface LinkProps {
	href: string;
	routeName: string;
}

const Link = ({ href, routeName }: LinkProps) => {
	const { pathname } = useLocation();
	const isCurrentRoute = pathname === href ? "blue.600" : "";

	return (
		<Box
			transition="all .5s ease"
			_hover={{ color: "gray.400" }}
			fontSize="1.2rem"
			fontWeight="bold"
			color={isCurrentRoute}
		>
			<RouterLink to={href}>{routeName}</RouterLink>
		</Box>
	);
};
