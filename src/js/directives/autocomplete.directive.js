/*global angular */

APP.directive('fetchData', function () {

		function link (scope, element, attrs) {
			element.bind('keyup', function () {
				scope.$apply(function (self) {
					self.fetchData(element.val(), attrs.fetchData);
				});
			});
		}

		return {
			restrict: 'A',
			link: link
		};
	});
