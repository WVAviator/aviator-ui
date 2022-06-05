/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React from "react";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import useTheme from "../../theme/useTheme";
import randomId from "../../utils/randomId";
import useCheckboxStyles from "./Checkbox.css";

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * The text that will be displayed adjacent to the textbox, and will activate the checkbox when clicked.
	 * @example
	 * <Checkbox label="Item 1" />
	 * <Checkbox label="Item 2" />
	 */
	label?: string;
	/**
	 * A boolean to set the initial state or externally control the state of the checkbox.
	 * @example
	 * <Checkbox checked={true} />
	 */
	checked?: boolean;
	/**
	 * A callback function that is called when the checkbox is clicked.
	 * @example
	 * <Checkbox onChange={(event) => console.log("Checkbox clicked. Value now:", event.target.checked)} />
	 */
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void | null;
	/**
	 * The color used from the current theme for the checkbox and the label text.
	 * @default "primary"
	 * @example
	 * <Checkbox color="secondary">Secondary</Checkbox>
	 */
	color?: keyof Theme["colors"];
}

/**
 *
 * @example
 * <Checkbox label="Item Completed" color="secondary" />
 */
const Checkbox: React.FC<CheckboxProps> = ({
	label = "",
	checked = false,
	onChange = null,
	color = null,
}) => {
	const labelId = useRef(randomId());
	const htmlId = useRef(randomId());

	const [internalChecked, setChecked] = useState(checked);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		onChange && onChange(event);
	}, []);

	const { colors } = useTheme();
	const { labelStyle, svgWrapperStyle, checkStyle, internalHtmlStyle } =
		useCheckboxStyles(internalChecked);

	return (
		<div>
			<input
				type="checkbox"
				id={htmlId.current}
				css={internalHtmlStyle}
				checked={internalChecked}
				onChange={handleChange}
				role="checkbox"
				aria-checked={internalChecked}
				aria-labelledby={labelId.current}
				tabIndex={0}
			/>

			<label
				css={labelStyle}
				id={labelId.current}
				htmlFor={htmlId.current}
			>
				<span css={svgWrapperStyle}>
					<svg viewBox="0 0 12 12" fill="none">
						<path
							d="M2.0625 6.28977L4.28664 9.1875L10.125 2.8125"
							stroke={color ? colors[color] : "black"}
							strokeWidth="0.75"
							css={checkStyle}
						/>
						<rect
							x="0.375"
							y="0.375"
							width="11.25"
							height="11.25"
							rx="1.125"
							stroke={color ? colors[color] : "black"}
							strokeWidth="0.75"
						/>
					</svg>
				</span>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
