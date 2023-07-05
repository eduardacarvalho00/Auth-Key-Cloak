import { getExample } from "@/api/axiosInstance";
import { STALE_TIME } from "@constants/staleTime";
import { useQuery } from "@tanstack/react-query";

interface UseQueryExample {
	page: number;
	pageLength: number;
	order: "asc" | "desc";
}

const useQueryExample = ({ page, pageLength, order }: UseQueryExample) => {
	return useQuery(
		["data", { page, order }],
		async () => {
			const { data } = await getExample({ page, pageLength, order });

			return data;
		},
		{
			staleTime: STALE_TIME,
		},
	);
};
