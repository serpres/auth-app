import { TOKEN_LS_KEY } from '../../constants/tokenLSKey';

export const authorizationHeaders = (headers: Headers) => {
	const token = localStorage.getItem(TOKEN_LS_KEY);
	if (token) headers.set(`Authorization`, `Bearer ${token}`);
	return headers;
};
