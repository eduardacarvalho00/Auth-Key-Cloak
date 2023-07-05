import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from ".";

const buttonTestId = "button";

describe("Button", () => {
	it("should be able to render the button", () => {
		const { getByTestId } = render(<Button text="Criar" />);

		expect(getByTestId(buttonTestId)).toBeInTheDocument();
	});

	it("should be able to render by text prop", () => {
		const { getByTestId } = render(<Button text="Adicionar" />);

		expect(getByTestId(buttonTestId)).toHaveTextContent("Adicionar");
	});

	it("should be able to fire event", () => {
		const handleClick = vi.fn();

		const { getByTestId } = render(
			<Button onClick={handleClick} text="Adicionar" />,
		);

		fireEvent.click(getByTestId(buttonTestId));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("should be able to have default style", () => {
		const { getByTestId } = render(<Button text="Adicionar" />);

		expect(getByTestId(buttonTestId)).toHaveStyle({
			padding: "1.5rem 2rem",
			color: "#0f0f0f",
			background: "pink.500",
		});
	});
});
