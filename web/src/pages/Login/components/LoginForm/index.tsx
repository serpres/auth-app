import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Button from '../../../../core/ui/Button';
import Input from '../../../../core/ui/Input';
import Typography from '../../../../core/ui/Typography';

import { useAuth } from '../../../../core/hooks/useAuth';

import { UNPROCESSABLE_ENTITY } from '../../../../core/constants/httpErrors';

import s from './style.module.scss';

const LoginForm = () => {
	const { login, error: loginError } = useAuth();
	const {
		formState: { errors },
		control,
		handleSubmit,
	} = useForm();

	const onSubmit = handleSubmit((values) => {
		login(values.email, values.password);
	});

	useEffect(() => {
		if (loginError === UNPROCESSABLE_ENTITY)
			toast.error('Неверный email или пароль');
	}, [loginError]);

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<Typography.Title className={s.form__title} level={2}>
				Вход
			</Typography.Title>

			<Controller
				rules={{ required: true }}
				name="email"
				control={control}
				render={({ field }) => (
					<Input title="Email" {...field} ref={null} innerRef={field.ref} />
				)}
			/>

			<Controller
				rules={{ required: true }}
				name="password"
				control={control}
				render={({ field }) => (
					<Input
						title="Пароль"
						{...field}
						ref={null}
						innerRef={field.ref}
						type="password"
					/>
				)}
			/>

			<Button type="submit" buttonType="secondary">
				Войти
			</Button>
			{(errors.email || errors.password) && (
				<div style={{ color: 'red' }}>Заполните все поля</div>
			)}
		</form>
	);
};

export default LoginForm;
