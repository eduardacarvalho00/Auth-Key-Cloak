import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
	text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
	return (
		<ChakraButton
			data-testid="button"
			p="1.5rem 2rem"
			color="#0f0f0f"
			bg="pink.500"
			{...rest}
		>
			{text}
		</ChakraButton>
	);
};
