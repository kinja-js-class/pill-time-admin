/*global angular */

const APP = angular.module('app', ['firebase', 'ui.router']);

APP.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state("home", {
		url: "/",
		template: '<h1>Home</h1>'
	})
	.state("404", {
		url: "/404",
		template: '<h1>404</h1>'
	})
	.state("login", {
		url: "/login",
		template: '<h1>login</h1>'
	})
	.state('caretaker', {
		url: '/caretaker',
		templateUrl: 'partials/caretaker-form.html',
		data: {
			authorization: true
		}
	})
	.state('patient', {
		url: '/patient',
		template: '<h1>Patient</h1>',
		data: {
			authorization: true
		}
	});

});

APP.run(function($rootScope, $state, authFctry) {

$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
	let authRequired = !!toState.data ? toState.data.authorization : false;

	if (authRequired && !authFctry.isAuth()) {
		$state.go('login')
	}
});
});