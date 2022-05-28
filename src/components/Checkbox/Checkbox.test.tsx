import { act, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import Checkbox from "./Checkbox";
import "@testing-library/jest-dom";

describe("Checkbox component", () => {
	it("should render on the screen", () => {
		render(<Checkbox />);
		const button = screen.getByRole("checkbox");
		expect(button).toBeInTheDocument();
	});

	it("should allow controlled state and text updates", () => {
		const Wrapper = () => {
			const [checked, setChecked] = useState(false);
			const handleChange = () => {
				setChecked(!checked);
			};
			return <Checkbox onChange={handleChange} />;
		};

		render(<Wrapper />);
		const checkbox = screen.getByRole("checkbox");

		act(() => {
			checkbox.click();
		});

		expect(checkbox).toBeChecked();
	});

	it("should be checked when the label is clicked", () => {
		render(<Checkbox label="Checkbox" />);
		const checkbox = screen.getByRole("checkbox");
		const checkboxText = screen.getByText("Checkbox");
		act(() => {
			checkboxText.click();
		});
		expect(checkbox).toBeChecked();
	});

	it("should be accesible", () => {
		render(<Checkbox label="Checkbox" />);
		const checkbox = screen.getByRole("checkbox");

		expect(checkbox).toHaveAttribute("aria-checked", "false");
		act(() => {
			checkbox.click();
		});
		expect(checkbox).toHaveAttribute("aria-checked", "true");
	});

	it("should allow default checked by setting the checked property", () => {
		render(<Checkbox label="Checkbox" checked={true} />);
		const checkbox = screen.getByRole("checkbox");
		expect(checkbox).toBeChecked();
	});
});
