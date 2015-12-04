// your awesome app goes here

'use strict';

var app = angular.module('app', []);

// @ngInject
app.directive('greeting', function ($timeout) {
  return {
    restrict: 'E',
    template: '<input ng-model="value"><span ng-click="click()">Csa {{name}} {{value}}!</span>',
    link: function link(scope, element, attr) {
      scope.name = 'Tibi';

      scope.click = function () {
        scope.name = 'Karcsi';
        $timeout(function () {
          scope.name = 'Katika';
          alert(scope.value);
        }, 2000);
      };
    }
  };
});
