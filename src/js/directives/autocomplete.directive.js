APP.directive('fetchData', () => {

	let link = (scope, element, attrs) => {
		element.bind('keyup', function () {
			scope.$apply(() => {
				scope.checkComplete();
			});
		});
	};

	return {
		restrict: 'A',
		link: link
	};
});
