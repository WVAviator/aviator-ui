/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const baseStyle = css`
  display: inline-block;
  background-color: #ffdf;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fcfc;
  }
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <button css={baseStyle} {...props} />;
};

export default Button;
