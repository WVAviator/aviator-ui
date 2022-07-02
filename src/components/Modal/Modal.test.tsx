import { render, screen } from "@testing-library/react";
import React from "react";
import Modal from "./Modal";
import "@testing-library/jest-dom";

describe("Modal component", () => {
	it("should render on the screen", () => {
		render(
			<Modal open={true} handleClose={() => 1}>
				Modal
			</Modal>
		);
		const element = screen.getByText("Modal");
		expect(element).toBeInTheDocument();
	});

	it("should close the modal upon pressing escape", () => {
		const handleClose = jest.fn();

		render(
			<Modal open={true} handleClose={handleClose}>
				Modal
			</Modal>
		);

		const escapeKey = { key: "Escape" };
		document.dispatchEvent(new KeyboardEvent("keydown", escapeKey));

		expect(handleClose).toHaveBeenCalled();
	});
});
