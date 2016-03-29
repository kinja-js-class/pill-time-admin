APP.factory('authFctry', ($firebaseObject) => {

	const FIREBASE_ROOT = new Firebase("https://incandescent-fire-8559.firebaseio.com")
	
	let service,
		isAuthenticated;

	isAuthenticated = () => {
		return false;
	}

	service = {
		isAuth: isAuthenticated
	}

	return service;
})