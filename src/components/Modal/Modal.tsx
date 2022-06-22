/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "@emotion/react";
import useModalStyles from "./Modal.css";

export interface ModalProps {
	color?: keyof Theme["colors"];
	open: boolean;
	handleClose?: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
	color = "primary",
	open,
	handleClose,
	children,
}) => {
	const { backdropStyle, modalStyle } = useModalStyles(color);

	if (!open) return null;

	return (
		<div css={backdropStyle} onClick={handleClose}>
			<div css={modalStyle} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
