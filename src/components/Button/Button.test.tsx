import { act, render, screen } from "@testing-library/react";
import Button from "./Button";
import React, { useState } from "react";
import "@testing-library/jest-dom";

describe("Button component", () => {
	it("should render on the screen", () => {
		render(<Button>Button</Button>);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	it("should allow controlled state and text updates", () => {
		const Wrapper = () => {
			const [count, setCount] = useState(0);
			const handleClick = () => {
				setCount(count + 1);
			};
			return <Button onClick={handleClick}>{count}</Button>;
		};

		render(<Wrapper />);
		const button = screen.getByRole("button");

		for (let i = 0; i < 14; i++) {
			act(() => {
				button.click();
			});
		}

		expect(button).toHaveTextContent("14");
	});

	it("renders an end icon", () => {
		render(<Button endIcon={<div>O</div>}>Button</Button>);
		const button = screen.getByRole("button");
		expect(button).toContainElement(screen.getByText("O"));
	});

	it("renders a start icon", () => {
		render(<Button startIcon={<span>O</span>}>Button</Button>);
		const button = screen.getByRole("button");
		expect(button).toContainElement(screen.getByText("O"));
	});

	it("navigates to a page when an href is passed", async () => {
		render(<Button href="https://www.google.com">Button</Button>);
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", "https://www.google.com");
		expect(link).toContainElement(screen.getByText("Button"));
	});
});
