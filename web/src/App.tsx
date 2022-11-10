import React from 'react';

import AppRouter from './core/routes';
import ErrorBoundary from './core/views/components/ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<React.Suspense fallback={null}>
				<AppRouter />
			</React.Suspense>
		</ErrorBoundary>
	);
}

export default App;
