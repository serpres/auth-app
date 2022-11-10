import React, { FC } from 'react';

import Header from '../../components/Header';

import s from './style.module.scss';

interface IProps {
	children?: React.ReactNode;
}

const MainLayout: FC<
	IProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, className, ...rest }) => (
	<div>
		<React.Suspense fallback={null}>
			<Header />
			<div className={s.wrapper + ' ' + className} {...rest}>
				{children}
			</div>
		</React.Suspense>
	</div>
);

export default MainLayout;
