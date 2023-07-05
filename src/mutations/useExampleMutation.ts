import { createExample, CreateExampleBody } from "@api/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@utils/queryClient";

const useExampleMutation = () => {
	return useMutation(
		async (date: CreateExampleBody) => {
			await createExample(date);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["example"]);
			},
		},
	);
};
