import { useToast as useToastChakra } from "@chakra-ui/react";

interface UseToastProps {
	toastSuccess: (title: string | undefined) => void;
	toastError: (title: string | undefined) => void;
}

const useToast = (): UseToastProps => {
	const toast = useToastChakra();

	const toastSuccess = (title: string | undefined) => {
		toast({
			title,
			status: "success",
			duration: 2000,
			isClosable: true,
			position: "top-right",
		});
	};

	const toastError = (title: string | undefined) => {
		toast({
			title,
			status: "error",
			duration: 2000,
			isClosable: true,
			position: "top-right",
		});
	};

	return {
		toastSuccess,
		toastError,
	};
};
