import React, { FC } from 'react';

interface ITypographyProps {
	children?: React.ReactNode;
}

interface ITypographyTitleProps {
	children?: React.ReactNode;
	level?: number;
}

const Title: FC<
	ITypographyTitleProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
> = ({ level, children, ...rest }) => {
	switch (level) {
		case 1:
			return <h1 {...rest}>{children}</h1>;
		case 2:
			return <h2 {...rest}>{children}</h2>;
		case 3:
			return <h3 {...rest}>{children}</h3>;
		case 4:
			return <h4 {...rest}>{children}</h4>;
		case 5:
			return <h5 {...rest}>{children}</h5>;
		case 6:
			return <h6 {...rest}>{children}</h6>;
		default:
			return <h6 {...rest}>{children}</h6>;
	}
};

const Typography: FC<
	ITypographyProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLParagraphElement>,
			HTMLParagraphElement
		>
> & {
	Title: typeof Title;
} = ({ children, ...rest }) => <p {...rest}>{children}</p>;

Typography.Title = Title;

export default Typography;
