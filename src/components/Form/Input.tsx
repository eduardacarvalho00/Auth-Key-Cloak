import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
	label: string;
	labelColor?: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ label, labelColor = "white", error, ...rest },
	ref: any,
) => {
	return (
		// !!errors significa que se tiver conteúdo é true, transformando em booleano
		<FormControl isInvalid={!!error}>
			{label && (
				<FormLabel color={labelColor} fontSize="1.2rem">
					{label} :
				</FormLabel>
			)}
			<ChakraInput
				focusBorderColor="green.600"
				color="toggleWhite"
				borderColor="green.600"
				_hover={{
					filter: "brightness(0.9)",
				}}
				size="lg"
				w={{ base: "15rem", md: "20rem", lg: "32rem" }}
				ref={ref}
				{...rest}
			/>
			{error && (
				<FormErrorMessage fontSize="1rem">{error.message}</FormErrorMessage>
			)}
		</FormControl>
	);
};

const Input = forwardRef(InputBase);
