import { act, render, screen } from "@testing-library/react";
import Button from "./Button";
import React, { useState } from "react";
import "@testing-library/jest-dom";

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
