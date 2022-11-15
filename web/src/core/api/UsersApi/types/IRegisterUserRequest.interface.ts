export interface IRegisterUserRequest {
	body: {
		user: {
			email: string;
			password: string;
			username: string;
		};
	};
}
