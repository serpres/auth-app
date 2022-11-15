import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useRegisterUserMutation } from '../../../../core/api/UsersApi';

import Button from '../../../../core/ui/Button';
import Input from '../../../../core/ui/Input';
import Typography from '../../../../core/ui/Typography';

import s from './style.module.scss';

const RegistrationForm = () => {
	const {
		formState: { errors },
		control,
		handleSubmit,
	} = useForm();

	const [RegisterUser] = useRegisterUserMutation();

	const onSubmit = handleSubmit((values) => {
		RegisterUser({
			body: {
				user: {
					email: values.email,
					username: values.username,
					password: values.password,
				},
			},
		})
			.unwrap()
			.then(() => toast.success('Регистрация заверщена'))
			.catch((e) =>
				toast.error(
					e.data.message || 'Не удалось зарегистрировать пользователя'
				)
			);
	});

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<Typography.Title className={s.form__title} level={2}>
				Регистрация
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
				name="username"
				control={control}
				render={({ field }) => (
					<Input
						title="Имя пользователя"
						{...field}
						ref={null}
						innerRef={field.ref}
					/>
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

export default RegistrationForm;
