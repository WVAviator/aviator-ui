/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useTheme from "../../theme/useTheme";
import { Palette } from "../../theme/themeTypes";

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

const checkStyle = css`
	transition: all 0.1s ease-in-out;
`;

export interface CheckboxProps {
	label?: string;
	defaultChecked?: boolean;
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void | null;
	color?: keyof Palette;
}

const Checkbox: React.FC<CheckboxProps> = ({
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

	const { colors } = useTheme();

	return (
		<div>
			<input
				id={uuid.current}
				type="checkbox"
				checked={internalChecked}
				onChange={handleChange}
				css={css`
					display: none;
				`}
			/>
			<label css={labelStyle} htmlFor={uuid.current}>
				<div css={svgWrapperStyle} className="svgWrapper">
					<svg viewBox="0 0 12 12" fill="none">
						<path
							d="M2.0625 6.28977L4.28664 9.1875L10.125 2.8125"
							stroke={
								color
									? colors.foreground[color].medium
									: colors.background.text.medium
							}
							stroke-width="0.75"
							css={[
								{
									opacity: internalChecked ? 1 : 0,
								},
								checkStyle,
							]}
						/>
						<rect
							x="0.375"
							y="0.375"
							width="11.25"
							height="11.25"
							rx="1.125"
							stroke={
								color
									? colors.foreground[color].medium
									: colors.background.text.medium
							}
							stroke-width="0.75"
						/>
					</svg>
				</div>
				{label && <span>{label}</span>}
			</label>
		</div>
	);
};

export default Checkbox;
