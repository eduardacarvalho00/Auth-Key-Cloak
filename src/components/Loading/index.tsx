import { Center, Spinner } from "@chakra-ui/react";

export const Loading = () => {
	const size = "5rem";

	return (
		<Center h="100vh">
			<Spinner h={size} w={size} />
		</Center>
	);
};
