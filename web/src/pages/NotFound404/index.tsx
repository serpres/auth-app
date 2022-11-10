import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../core/ui/Button';
import Typography from '../../core/ui/Typography';
import MainLayout from '../../core/views/layout/MainLayout';

const NotFound404Page = () => {
	const navigate = useNavigate();
	return (
		<div>
			<MainLayout>
				<Typography.Title level={1}>404</Typography.Title>
				<Typography>Такой страницы не существует</Typography>
				<Button buttonType="secondary" onClick={() => navigate(-1)}>
					Назад
				</Button>
			</MainLayout>
		</div>
	);
};

export default NotFound404Page;
