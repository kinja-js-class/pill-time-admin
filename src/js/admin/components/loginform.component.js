APP.component('loginForm', {

	controller: function (authFctry, $state) {

		let _handleAuthSuccess = (userData) => {
			$state.go('admin');
		};

		let _handleAuthError = (error) => {
			this.loginError = error.message
		};

		let loginAttempt = () => {
			this.isLoggingIn = true;
			authFctry.authenticate(this.email, this.password)
				.then(_handleAuthSuccess, _handleAuthError);
		};

		let resetState = () => {
			this.isLoggingIn = false
			this.loginError = ''
		}

		this.resetState = resetState
		this.loginAttempt = loginAttempt
	},

	templateUrl: 'partials/login-form.html',
	controllerAs: 'login'
});
