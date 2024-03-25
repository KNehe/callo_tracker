/**
 * Our Entities:
 *  - User
 *    - Name
 *    - Email
 *    - Uid
 *  - Auth
 *    - isLoggedIn
 *  - Fitness
 *    - Calories consumed
 *    - Calories burnt
 *    - Amount of Water drunk
 *    - Hours of sleep
 *  - Goals (Just fitness goals)
 *    - Weight goal
 *    - body dream goal (eg I dream of someday being able to bench 200kg)
 */
import { types } from 'mobx-state-tree';
import User from '../models/user';
import Auth from '../models/auth';

const RootStore = types.model({
	user: types.map(User),
	auth: Auth,
});

const rootStore = RootStore.create({
	user: {},
	auth: {
		isLoggedIn: false,
	},
});

export default rootStore;
