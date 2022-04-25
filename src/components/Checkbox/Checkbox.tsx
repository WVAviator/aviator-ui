/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const wrapperStyle = css`
	display: flex;
	align-items: center;
	gap: 1em;
`;

export interface CheckboxProps {
	label?: string;
	defaultChecked?: boolean;
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void | null;
}

const Checkbox: React.FC<CheckboxProps> = ({
	label = "",
	defaultChecked = false,
	checked = false,
	onChange = null,
}) => {
	const uuid = useRef(uuidv4());

	const [internalChecked, setChecked] = useState(defaultChecked || checked);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		onChange && onChange(event);
	}, []);

	return (
		<div css={wrapperStyle}>
			<input
				id={uuid.current}
				type="checkbox"
				checked={internalChecked}
				onChange={handleChange}
			/>
			{label && <label htmlFor={uuid.current}>{label}</label>}
		</div>
	);
};

export default Checkbox;
