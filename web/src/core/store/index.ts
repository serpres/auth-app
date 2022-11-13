import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
	configureStore,
	isRejectedWithValue,
	Middleware,
	MiddlewareAPI,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { TOKEN_LS_KEY } from '../constants/tokenLSKey';
import { usersApi } from '../api/UsersApi';

const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => (next) => (action) => {
		if (isRejectedWithValue(action)) {
			switch (action.payload.originalStatus) {
				case 400: {
					const token = localStorage.getItem(TOKEN_LS_KEY);
					if (token) {
						window.location.replace(process.env.PUBLIC_URL + '/404');
					} else {
						window.location.replace(process.env.PUBLIC_URL + '/login');
					}
					break;
				}
				case 404:
					window.location.replace(process.env.PUBLIC_URL + '/404');
			}
		}
		return next(action);
	};

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
