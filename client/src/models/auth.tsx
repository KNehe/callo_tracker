import { types } from 'mobx-state-tree';

const Auth = types.model({
	isLoggedIn: types.boolean,
});

export default Auth;
