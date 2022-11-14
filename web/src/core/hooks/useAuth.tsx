import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useState } from 'react';
import { useLoginUserMutation } from '../api/UsersApi';
import { TOKEN_LS_KEY } from '../constants/tokenLSKey';

export function useAuth() {
	const token = localStorage.getItem(TOKEN_LS_KEY);
	const [AuthorizeUser] = useLoginUserMutation();
	const [error, setError] = useState<
		| number
		| 'FETCH_ERROR'
		| 'PARSING_ERROR'
		| 'TIMEOUT_ERROR'
		| 'CUSTOM_ERROR'
		| null
	>(null);

	const login = async (email: string, password: string) => {
		setError(null);
		const response = await AuthorizeUser({
			body: {
				user: {
					email,
					password,
				},
			},
		});
		if ('data' in response) {
			localStorage.setItems(TOKEN_LS_KEY, response.data.user.token);
		} else if ('status' in response.error) {
			setError(response.error.status);
		}
	};

	return { token, login, error };
}
