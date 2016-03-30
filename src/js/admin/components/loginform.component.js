APP.component('loginForm', {

	controller: function (authFctry) {
		console.log('controller');
		let loginAttempt,
			_handleAuthSuccess,
			_handleAuthError,
			isLoggingIn = false;
			
		this.loginError = 'x';

		_handleAuthSuccess = (userData) => {
			console.log(userData);
		};

		_handleAuthError = (error) => {
			this.loginError = "errormessage";
			console.log(this);
		};

		loginAttempt = () => {
			this.isLoggingIn = true;
			authFctry.authenticate(this.email, this.password)
				.then(_handleAuthSuccess, _handleAuthError);
		};

		this.loginAttempt = loginAttempt;
	},

	templateUrl: 'partials/login-form.html',
	controllerAs: 'login'
});
