import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from ".";

describe("Pagination", () => {
	const handlePrevPage = vi.fn();
	const handleNextPage = vi.fn();
	const page = 1;
	const totalItems = 15;
	const pageLength = 5;
	const isLoading = false;

	it("should be able to render Pagination", () => {
		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading={isLoading}
				page={page}
				pageLength={pageLength}
				totalItems={totalItems}
			/>,
		);

		expect(screen.getByTestId("pagination")).toBeInTheDocument();
	});

	it("should be able to click in next page button", () => {
		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading={isLoading}
				page={page}
				pageLength={pageLength}
				totalItems={totalItems}
			/>,
		);

		fireEvent.click(screen.getByTestId("next-button"));

		expect(handleNextPage).toBeCalled();
	});

	it("should not be able to click in next page button", () => {
		const handleNextPage = vi.fn();

		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading={isLoading}
				page={2}
				pageLength={5}
				totalItems={10}
			/>,
		);

		fireEvent.click(screen.getByTestId("next-button"));

		expect(handleNextPage).not.toBeCalled();
		expect(screen.getByTestId("next-button")).toHaveAttribute("disabled");
	});

	it("should be able to click in prev page button", () => {
		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading={isLoading}
				page={2}
				pageLength={pageLength}
				totalItems={totalItems}
			/>,
		);

		fireEvent.click(screen.getByTestId("prev-button"));

		expect(handlePrevPage).toBeCalled();
	});

	it("should not be able to click in prev page button", () => {
		const handlePrevPage = vi.fn();

		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading={isLoading}
				page={1}
				pageLength={pageLength}
				totalItems={totalItems}
			/>,
		);

		fireEvent.click(screen.getByTestId("prev-button"));

		expect(handlePrevPage).not.toBeCalled();
		expect(screen.getByTestId("prev-button")).toHaveAttribute("disabled");
	});

	it("should be able to disable all buttons when data is loading", () => {
		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading
				page={2}
				pageLength={pageLength}
				totalItems={totalItems}
			/>,
		);

		expect(screen.getByTestId("prev-button")).toHaveAttribute("disabled");
		expect(screen.getByTestId("next-button")).toHaveAttribute("disabled");
	});

	it("should be able to render total pages 4", () => {
		render(
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				isLoading={isLoading}
				page={page}
				pageLength={5}
				totalItems={20}
			/>,
		);

		expect(screen.getByText("4")).toBeInTheDocument();
	});
});
