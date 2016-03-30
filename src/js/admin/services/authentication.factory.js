APP.factory('authFctry', ($firebaseObject) => {

	const FIREBASE_ROOT = new Firebase('https://incandescent-fire-8559.firebaseio.com')
	
	let service,
		isAuthenticated,
		authenticate,
		logout,
		_authHandler;

	isAuthenticated = () => {
		let authData = FIREBASE_ROOT.getAuth();
		return !!authData;
	}

	authenticate = (email, password) => {
		return new Promise( (resolve, reject) => {
			FIREBASE_ROOT.authWithPassword({email, password}, (error, authData) => {
				if (!error) {
					resolve(authData);
				} else {
					reject(error);
				}
			});
		});
	}

	logout = () => {
		FIREBASE_ROOT.unauth();
	}

	service = {
		isAuth: isAuthenticated,
		authenticate: authenticate,
		logout: logout
	}

	return service;
})