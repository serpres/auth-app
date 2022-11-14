import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { authorizationHeaders } from '../helpers';
import { ILoginUserRequest } from './types/ILoginUserRequest.interface';
import { IUser } from './types/IUser.interface';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_SERVER + '/api',
		prepareHeaders: authorizationHeaders,
		mode: 'cors',
	}),
	endpoints: (build) => ({
		loginUser: build.mutation<IUser, ILoginUserRequest>({
			query: ({ body }) => ({
				url: `/users/login`,
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useLoginUserMutation } = usersApi;
