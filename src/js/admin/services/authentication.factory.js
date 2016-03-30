APP.factory('authFctry', ($firebaseObject, $q) => {

	const FIREBASE_ROOT = new Firebase('https://incandescent-fire-8559.firebaseio.com')

	let _isAuthenticated = () => {
		let authData = FIREBASE_ROOT.getAuth()
		return !!authData
	}

	let _authenticate = (email, password) => {
		return $q( (resolve, reject) => {
			FIREBASE_ROOT.authWithPassword({email, password}, (error, authData) => {
				if (!error) {
					resolve(authData)
				} else {
					reject(error)
				}
			})
		})
	}

	let _logout = () => {
		FIREBASE_ROOT.unauth()
	}

	let _getUserData = () => {
		let users = FIREBASE_ROOT.child('users')
		let authData = FIREBASE_ROOT.getAuth()

		let userRef = users.child(authData.uid)

		userRef.on('value', function(snapshot) {
			return snapshot.val()
		}, function (errorObject) {
			return errorObject;
		});

	}

	let service = {
		isAuth: _isAuthenticated,
		authenticate: _authenticate,
		logout: _logout,
		getUserData: _getUserData
	}

	return service
})