/*global angular */

const APP = angular.module('app', ['firebase', 'ui.router']);

let routeConfig,
	listenToStateChanges;

/**
 * setting up the routes. Protects sensitive routes by requiring authentication
 * where the state is provided with `data.authorization`
 * @param {object} $stateProvider state corresponds to a "place" in the application in terms of the overall UI and navigation
 * @param {object} $urlRouterProvider responsibilible of watching $location
 * @return VOID
 */
routeConfig = ($stateProvider, $urlRouterProvider) => {
	// redirect to `/` if state is not avalable on the given location
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: 'home.html'
		})
		.state("login", {
			url: "/login",
			template: '<login-form></login-form>'
		})
		.state('caretaker', {
			url: '/caretaker',
			templateUrl: 'partials/caretaker-form.html',
			data: {
				authorization: true
			}
		});

}

/**
 * On the start of the application starts listening on state changes
 * and redirect to the login screen if authentication is required
 * @param {object} $rootScope the app's root scope
 * @param {object} $state     angular $state object
 * @param {boject} authFctry  authentication factory
 * @return VOID
 */
listenToStateChanges = ($rootScope, $state, authFctry) => {

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		let authRequired = !!toState.data ? toState.data.authorization : false;

		if (authRequired && !authFctry.isAuth()) {
			$state.go('login')
		}
	});

	$rootScope.onLogout = function() {
		authFctry.logout();
		$state.go('home');
	};
}

APP.config(routeConfig);
APP.run(listenToStateChanges);
