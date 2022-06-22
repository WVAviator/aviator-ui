import { render, screen } from "@testing-library/react";
import React from "react";
import Modal from "./Modal";
import "@testing-library/jest-dom";

describe("Modal component", () => {
	it("should render on the screen", () => {
		render(<Modal open={true}>Modal</Modal>);
		const element = screen.getByText("Modal");
		expect(element).toBeInTheDocument();
	});
});
