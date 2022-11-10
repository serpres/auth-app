import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		const { hasError } = this.state;

		if (hasError) {
			return (
				<h1 style={{ marginTop: '2rem', marginLeft: '2rem' }}>
					Произошла ошибка
				</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
