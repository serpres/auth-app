import React, { FC } from 'react';
import { RefCallBack } from 'react-hook-form';

import s from './style.module.scss';

type TProps = {
	error?: string;
	title?: string;
	innerRef?: RefCallBack;
};

const Input: FC<
	TProps &
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>
> = ({ children, className, title, error, innerRef, ...rest }) => (
	<div className={s.container}>
		<input
			ref={innerRef}
			placeholder=" "
			className={s.input + ' ' + className}
			{...rest}
		/>
		<label className={s.label}>{title}</label>
	</div>
);

export default Input;
