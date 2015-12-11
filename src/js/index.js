// your awesome app goes here

const app = angular.module('app', []);

app.factory('nameStore', () => {
  return {
    names: ['Tibike', 'Lajoska']
  };
});

app.service('nameStore2', function() {
  this.alma = 2;
});

app.run((nameStore) => {

})

// @ngInject
app.directive('greeting', ($timeout, nameStore, nameStore2) => {
  console.log(nameStore2);
	return {
		restrict: 'E',
		template: '<input ng-model="value"><span ng-click="click()">Csa {{name}} {{value}}!</span>',
		link(scope, element, attr) {
			scope.name = nameStore.names[0];

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
