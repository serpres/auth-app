export interface ILoginUserRequest {
	body: {
		user: {
			email: string;
			password: string;
		};
	};
}
