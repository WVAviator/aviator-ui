/** @jsxImportSource @emotion/react */
import React from "react";
import { Theme } from "@emotion/react";
import useModalStyles from "./Modal.css";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: keyof Theme["colors"];
	open: boolean;
	handleClose?: () => void;
	children: React.ReactNode;
	closeOnBackdropClick?: boolean;
	backdropProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({
	color = "background",
	open,
	handleClose,
	children,
	closeOnBackdropClick = true,
	backdropProps = {},
	onClick,
	...rest
}) => {
	const { backdropStyle, modalStyle } = useModalStyles(color);

	if (!open) return null;

	const processCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
		if (closeOnBackdropClick) {
			handleClose && handleClose();
		}
		backdropProps.onClick && backdropProps.onClick(e);
	};

	const processClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		onClick && onClick(e);
	};

	return (
		<div
			role="dialog"
			css={backdropStyle}
			onClick={processCloseModal}
			{...backdropProps}
		>
			<div css={modalStyle} onClick={processClickModal} {...rest}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
