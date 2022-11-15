import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { authorizationHeaders } from '../helpers';

import { IUser } from '../../../types/IUser.interface';
import { ILoginUserRequest } from './types/ILoginUserRequest.interface';
import { IRegisterUserRequest } from './types/IRegisterUserRequest.interface';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_SERVER + '/api',
		prepareHeaders: authorizationHeaders,
		mode: 'cors',
	}),
	endpoints: (build) => ({
		loginUser: build.mutation<{ user: IUser }, ILoginUserRequest>({
			query: ({ body }) => ({
				url: `/users/login`,
				method: 'POST',
				body,
			}),
		}),
		registerUser: build.mutation<{ user: IUser }, IRegisterUserRequest>({
			query: ({ body }) => ({
				url: `/users`,
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useLoginUserMutation, useRegisterUserMutation } = usersApi;
