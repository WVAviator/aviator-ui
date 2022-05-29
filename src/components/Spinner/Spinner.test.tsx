import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";
import React from "react";
import "@testing-library/jest-dom";

describe("Spinner component", () => {
	it("should render on the screen", () => {
		render(<Spinner />);
		const spinner = screen.getByRole("progressbar");
		expect(spinner).toBeInTheDocument();
	});

	it("should allow customization", () => {
		render(
			<Spinner
				size={200}
				animationOptions={{ duration: 3, easingFunction: "linear" }}
				color="secondary"
				strokeWidth={10}
			/>
		);
		const spinner = screen.getByRole("progressbar");
		expect(spinner).toBeInTheDocument();
	});
});
