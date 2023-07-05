import { useState } from "react";

interface PaginationProps {
	page: number;
	totalItems: number;
	pageLength: number;
	handleTotalItems: (totalItens: number) => void;
	handleNextPage: () => void;
	handlePrevPage: () => void;
	setToFirstPage: () => void;
}

const usePagination = (pageLength: number): PaginationProps => {
	const [page, setPage] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const isHaveItemInNextPage = totalItems - page * pageLength > 0;

	const handleNextPage = () => {
		if (isHaveItemInNextPage) {
			setPage((page) => page + 1);
		}
	};

	const handlePrevPage = () => {
		if (page > 1) setPage((page) => page - 1);
	};

	const handleTotalItems = (totalItens: number) => {
		setTotalItems(totalItens);
	};

	const setToFirstPage = () => {
		setPage(1);
	};

	return {
		page,
		pageLength,
		totalItems,
		handleTotalItems,
		handleNextPage,
		handlePrevPage,
		setToFirstPage,
	};
};
