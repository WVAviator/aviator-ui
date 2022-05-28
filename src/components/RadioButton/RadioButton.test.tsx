import { act, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import RadioButton from "./RadioButton";
import "@testing-library/jest-dom";

describe("RadioButton component", () => {
	it("should render on the screen", () => {
		render(<RadioButton />);
		const button = screen.getByRole("radio");
		expect(button).toBeInTheDocument();
	});

	it("should allow controlled state and text updates", () => {
		const Wrapper = () => {
			const [checked, setChecked] = useState(false);
			const handleClick = () => {
				setChecked(!checked);
			};
			return <RadioButton onClick={handleClick} />;
		};

		render(<Wrapper />);
		const radio = screen.getByRole("radio");

		act(() => {
			radio.click();
		});

		expect(radio).toBeChecked();
	});

	it("should be checked when the label is clicked", () => {
		render(<RadioButton label="Radio Button" />);
		const radio = screen.getByRole("radio");
		const radioLabel = screen.getByText("Radio Button");
		act(() => {
			radioLabel.click();
		});
		expect(radio).toBeChecked();
	});

	it("should be accesible", () => {
		render(<RadioButton label="Radio Button" />);
		const radio = screen.getByRole("radio");

		expect(radio).toHaveAttribute("aria-checked", "false");
		act(() => {
			radio.click();
		});
		expect(radio).toHaveAttribute("aria-checked", "true");
	});
});
