import React from 'react';
import { Provider } from 'react-redux';
import { store } from './core/store';

import AppRouter from './core/routes';
import ErrorBoundary from './core/views/components/ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<React.Suspense fallback={null}>
					<AppRouter />
				</React.Suspense>
			</Provider>
		</ErrorBoundary>
	);
}

export default App;
