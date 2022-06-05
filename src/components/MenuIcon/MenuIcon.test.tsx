import { act, render, screen } from "@testing-library/react";
import MenuIcon from "./MenuIcon";
import React, { useState } from "react";
import "@testing-library/jest-dom";

describe("MenuIcon component", () => {
	it("should render on the screen", () => {
		render(<MenuIcon />);
		const menuIcon = screen.getByRole("button");
		expect(menuIcon).toBeInTheDocument();
	});

	it("should allow controlled state and can show/hide a menu", () => {
		const Wrapper = () => {
			const [open, setOpen] = useState(false);

			return (
				<div>
					<MenuIcon open={open} onChange={setOpen} />
					<div id="menu" style={{ display: open ? "block" : "none" }}>
						Mobile Menu
					</div>
				</div>
			);
		};

		render(<Wrapper />);
		const menu = screen.getByText("Mobile Menu");
		const menuIcon = screen.getByRole("button");

		expect(menu).not.toBeVisible();

		act(() => {
			menuIcon.click();
		});

		expect(menu).toBeVisible();

		act(() => {
			menuIcon.click();
		});

		expect(menu).not.toBeVisible();
	});
});
