/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React from "react";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useAviatorTheme from "../../theme/useAviatorTheme";

const labelStyle = css`
	display: flex;
	align-items: center;
	gap: 1em;
	cursor: pointer;
	&:hover > .svgWrapper {
		transform: scale(1.05);
	}
	&:active > .svgWrapper {
		transform: scale(0.95);
	}
`;

const svgWrapperStyle = css`
	width: 1.1em;
	height: 1.1em;
	transition: all 0.1s ease-in-out;
`;

const radioStyle = css`
	transition: all 0.1s ease-in-out;
`;

export interface RadioButtonProps {
	label?: string;
	defaultChecked?: boolean;
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void | null;
	color?: keyof Theme["colors"];
}

const RadioButton: React.FC<RadioButtonProps> = ({
	label = "",
	defaultChecked = false,
	checked = false,
	onChange = null,
	color = null,
}) => {
	const uuid = useRef(uuidv4());

	const [internalChecked, setChecked] = useState(defaultChecked || checked);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		onChange && onChange(event);
	}, []);

	const { colors } = useAviatorTheme();

	return (
		<div>
			<input
				id={uuid.current}
				type="radio"
				checked={internalChecked}
				onChange={handleChange}
			/>
			<label css={labelStyle} htmlFor={uuid.current}>
				<div css={svgWrapperStyle} className="svgWrapper"></div>
				{label && <span>{label}</span>}
			</label>
		</div>
	);
};

export default RadioButton;
