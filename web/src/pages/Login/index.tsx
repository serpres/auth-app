import React from 'react';

import MainLayout from '../../core/views/layout/MainLayout';
import LoginForm from './components/LoginForm';

import s from './style.module.scss';

const LoginPage = () => {
	return (
		<MainLayout className={s.form__wrapper}>
			<LoginForm />
		</MainLayout>
	);
};

export default LoginPage;
