import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../../../core/ui/Button';
import Input from '../../../../core/ui/Input';
import Typography from '../../../../core/ui/Typography';

import s from './style.module.scss';

const LoginForm = () => {
	const { handleSubmit } = useForm();
	const onSubmit = (data: any) => console.log(data);

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<Typography.Title className={s.form__title} level={2}>
				Вход
			</Typography.Title>
			<Input title="Логин"></Input>
			<Input title="Пароль" type="password" />
			<Button buttonType="secondary">Войти</Button>
		</form>
	);
};

export default LoginForm;
