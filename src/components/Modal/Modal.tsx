/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { Theme } from "@emotion/react";
import useModalStyles from "./Modal.css";
import ReactFocusLock from "react-focus-lock";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: keyof Theme["colors"];
	open: boolean;
	handleClose: () => void;
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
	...rest
}) => {
	useEffect(() => {
		const handleEscapeKeyPressed = (event: KeyboardEvent) => {
			if (event.key === "Escape" && open) {
				handleClose && handleClose();
			}
		};
		document.addEventListener("keydown", handleEscapeKeyPressed);
		return () => {
			document.removeEventListener("keydown", handleEscapeKeyPressed);
		};
	}, [open]);

	const { backdropStyle, modalStyle } = useModalStyles(color);

	if (!open) return null;

	const handleBackdropClick = () => {
		if (closeOnBackdropClick) {
			handleClose && handleClose();
		}
	};

	const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return (
		<div
			role="dialog"
			aria-modal="true"
			css={backdropStyle}
			onClick={handleBackdropClick}
			{...backdropProps}
		>
			<div css={modalStyle} onClick={handleModalClick} {...rest}>
				<ReactFocusLock returnFocus>{children}</ReactFocusLock>
			</div>
		</div>
	);
};

export default Modal;
