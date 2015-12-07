// your awesome app goes here

const app = angular.module('app', []);

// @ngInject
app.directive('greeting', ($timeout) => {
	return {
		restrict: 'E',
		template: '<input ng-model="value"><span ng-click="click()">Csa {{name}} {{value}}!</span>',
		link(scope, element, attr) {
			scope.name = 'Tibi';

			scope.click = () => {
				scope.name = 'Karcsi';
				$timeout(() => {
					scope.name = 'Katika';
					window.alert(scope.value);
				}, 2000);
			};
		}
	};
});
