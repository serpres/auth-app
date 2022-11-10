import React, { FC } from 'react';
import clsx from 'clsx';

import s from './style.module.scss';

type TProps = {
	children?: React.ReactNode;
	buttonType?: 'secondary' | 'neutral';
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

const Button: FC<TProps> = ({ children, className, buttonType, ...rest }) => (
	<button
		className={clsx({
			[s.button]: true,
			[s[`button-${buttonType}`]]: buttonType,
		})}
		{...rest}
	>
		{children}
	</button>
);

export default Button;
