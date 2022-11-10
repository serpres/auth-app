import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from '../../pages/Login';
import MainPage from '../../pages/Main';
import NotFound404 from '../../pages/NotFound404';
import RegistrationPage from '../../pages/Registration';

const AppRouter = () => (
	<Router basename={process.env.PUBLIC_URL}>
		<Routes>
			<Route path={'/'} element={<MainPage />} />
			<Route path={'/login'} element={<LoginPage />} />
			<Route path={'/registration'} element={<RegistrationPage />} />
			<Route path={'*'} element={<NotFound404 />} />
		</Routes>
	</Router>
);

export default AppRouter;
