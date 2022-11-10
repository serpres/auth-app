import React, { FC } from 'react';
import s from './style.module.scss';

import clsx from 'clsx';

interface IRowProps {
	children?: React.ReactNode;
	justify?: 'center' | 'end';
	align?: 'center' | 'end';
	reverse?: boolean;
	gap?: number;
}

interface IItemProps {
	children?: React.ReactNode;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	gap?: number;
}

interface IContainerProps {
	children?: React.ReactNode;
}

const Row: FC<
	IRowProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, justify, align, reverse, gap, ...rest }) => (
	<div
		className={clsx({
			[s['flex-row']]: true,
			[s['flex-row__reverse']]: reverse,
			[s[`flex-row__justify-${justify}`]]: justify,
			[s[`flex-row__justify-${align}`]]: align,
			[s[`gap`]]: gap,
		})}
		{...rest}
	>
		{children}
	</div>
);

const Item: FC<
	IItemProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, xs, sm, md, lg, gap, ...rest }) => (
	<div
		className={clsx({
			[s[`flex-col-xs-${xs}`]]: xs,
			[s[`flex-col-xs-${sm}`]]: sm,
			[s[`flex-col-md-${md}`]]: md,
			[s[`flex-col-lg-${lg}`]]: lg,
		})}
		{...rest}
	>
		{children}
	</div>
);

const Container: FC<
	IContainerProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, ...rest }) => (
	<div className={s['flex-container']} {...rest}>
		{children}
	</div>
);

const Flex = {
	Row,
	Item,
	Container,
};

export default Flex;
