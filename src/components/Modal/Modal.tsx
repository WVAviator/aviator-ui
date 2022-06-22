/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "@emotion/react";
import useModalStyles from "./Modal.css";

export interface ModalProps {
	color?: keyof Theme["colors"];
}

const Modal: React.FC<ModalProps> = ({ color = "primary" }) => {
	const { baseStyle } = useModalStyles(color);

	return <div css={baseStyle}>Modal</div>;
};

export default Modal;
