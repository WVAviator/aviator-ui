/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React from "react";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useTheme } from "../../theme";
import { randomId } from "../../utils";
import useRadioButtonStyles from "./RadioButton.css";

export interface RadioButtonProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * The text that will be displayed adjacent to the radio, and will activate the radio when clicked.
	 * @example
	 * <RadioButton label="Item 1" />
	 */
	label?: string;
	/**
	 * A boolean to set the initial state or externally control the state of the radio.
	 * @example
	 * <RadioButton checked={true} />
	 */
	checked?: boolean;
	/**
	 * A callback function that is called when the radio is clicked.
	 * @example
	 * <RadioButton onChange={(event) => console.log("Radio clicked. Value now:", event.target.checked)} />
	 */
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void | null;
	/**
	 * The color used from the current theme for the radio and the label text.
	 * @default "primary"
	 * @example
	 * <RadioButton color="secondary">Secondary</RadioButton>
	 */
	color?: keyof Theme["colors"];
}
/**
 * A basic radio button component.
 * @example
 * <RadioButton label="Item 1" color="secondary" checked={true} />
 * <RadioButton label="Item 2" color="secondary" />
 */
const RadioButton: React.FC<RadioButtonProps> = ({
	label = "",
	checked = false,
	onChange = null,
	color = "primary",
	className = "",
	...rest
}) => {
	const uuid = useRef(randomId());

	const [internalChecked, setInternalChecked] = useState(checked);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setInternalChecked(event.target.checked);
		onChange && onChange(event);
	}, []);

	const { colors } = useTheme();
	const { baseInputStyle, labelStyle, svgWrapperStyle, radioStyle } =
		useRadioButtonStyles(internalChecked);

	return (
		<div>
			<input
				id={uuid.current}
				css={baseInputStyle}
				type="radio"
				checked={internalChecked}
				onChange={handleChange}
				{...rest}
			/>
			<label
				css={labelStyle}
				htmlFor={uuid.current}
				className={className}
				role="radio"
				aria-checked={internalChecked}
			>
				<div css={svgWrapperStyle} className="svgWrapper">
					<svg viewBox="0 0 12 12" fill="none">
						<circle
							cx="6"
							cy="6"
							r="5.5"
							stroke={colors[color]}
							strokeWidth="1"
						/>

						<circle
							cx="6"
							cy="6"
							r="3.75"
							fill={colors[color]}
							css={radioStyle}
						/>
					</svg>
				</div>
				{label && <span>{label}</span>}
			</label>
		</div>
	);
};

export default RadioButton;
