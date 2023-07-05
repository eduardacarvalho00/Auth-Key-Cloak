import { Flex, HStack, Text } from "@chakra-ui/react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { PaginationButton } from "./PaginationButton";

interface PaginationProps {
	handlePrevPage: () => void;
	handleNextPage: () => void;
	page: number;
	totalItems: number;
	pageLength: number;
	isLoading: boolean;
}

export const Pagination = ({
	handlePrevPage,
	handleNextPage,
	page,
	totalItems,
	pageLength,
	isLoading,
}: PaginationProps) => {
	const totalItemsIsLessEqualThan0 = totalItems - page * pageLength <= 0;
	const isFetching = isLoading;
	const isFirstPage = page === 1;
	const totalPages = Math.ceil(totalItems / pageLength);

	return (
		<Flex
			data-testid="pagination"
			align="center"
			justify="space-between"
			w={170}
		>
			<PaginationButton
				data-testid="prev-button"
				aria-label="Left arrow"
				iconName={TfiArrowCircleLeft}
				onClick={handlePrevPage}
				isDisabled={isFirstPage || isFetching}
			/>

			<HStack spacing="1.5">
				<Text fontSize="1.2rem" fontWeight={500}>
					{page}
				</Text>
				<Text fontSize="1.2rem" fontWeight={500}>
					de
				</Text>
				<Text fontSize="1.2rem" fontWeight={500}>
					{totalPages}
				</Text>
			</HStack>

			<PaginationButton
				data-testid="next-button"
				aria-label="Right arrow"
				iconName={TfiArrowCircleRight}
				onClick={handleNextPage}
				isDisabled={totalItemsIsLessEqualThan0 || isFetching}
			/>
		</Flex>
	);
};
