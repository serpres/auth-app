import React from 'react';

import MainLayout from '../../core/views/layout/MainLayout';
import RegistrationForm from './components/RegistrationForm';

import s from './style.module.scss';

const RegistrationPage = () => {
	return (
		<MainLayout className={s.form__wrapper}>
			<RegistrationForm />
		</MainLayout>
	);
};

export default RegistrationPage;
