import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../../../../core/api/UsersApi';
import { TOKEN_LS_KEY } from '../../../../core/constants/tokenLSKey';

import Button from '../../../../core/ui/Button';
import Input from '../../../../core/ui/Input';
import Typography from '../../../../core/ui/Typography';

import s from './style.module.scss';

const LoginForm = () => {
	const {
		formState: { errors },
		control,
	} = useForm();

	return (
		<form className={s.form} onSubmit={() => {}}>
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
					<Input title="Пароль" {...field} ref={null} innerRef={field.ref} />
				)}
			/>

			<Button type="submit" buttonType="secondary">
				Войти
			</Button>
			<div style={{ color: 'red' }}>
				{(errors.email || errors.password) && 'Заполните все поля'}
			</div>
		</form>
	);
};

export default LoginForm;
