import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../ui/Button';
import Typography from '../../../ui/Typography';

import s from './style.module.scss';

const Header = () => {
	const navigate = useNavigate();
	return (
		<header className={s.header}>
			<div className={s.header__container}>
				<Typography.Title
					style={{ cursor: 'pointer' }}
					onClick={() => {
						navigate('/', { replace: true });
					}}
					level={3}
				>
					Auth app
				</Typography.Title>
				<div className={s.buttons}>
					<Button
						buttonType="neutral"
						onClick={() => navigate('/login', { replace: true })}
						style={{ marginRight: 10 }}
					>
						Войти
					</Button>
					<Button
						buttonType="neutral"
						onClick={() => navigate('/registration', { replace: true })}
					>
						Регистрация
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
