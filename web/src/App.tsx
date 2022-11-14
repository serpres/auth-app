import React from 'react';
import { Provider } from 'react-redux';

import { store } from './core/store';
import AppRouter from './core/routes';
import ErrorBoundary from './core/views/components/ErrorBoundary';
import { Slide, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<React.Suspense fallback={null}>
					<AppRouter />
				</React.Suspense>
				<ToastContainer
					transition={Slide}
					position="bottom-right"
					autoClose={3000}
					closeOnClick={true}
					pauseOnHover={true}
					draggable={true}
				/>
			</Provider>
		</ErrorBoundary>
	);
}

export default App;
