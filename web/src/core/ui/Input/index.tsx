import React, { FC } from 'react';

import s from './style.module.scss';

type TProps = {
	error?: string;
	title?: string;
};

const Input: FC<
	TProps &
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>
> = ({ children, className, title, error, ...rest }) => (
	<div className={s.container}>
		<input placeholder=" " className={s.input + ' ' + className} {...rest} />
		<label className={s.label}>{title}</label>
	</div>
);

export default Input;
