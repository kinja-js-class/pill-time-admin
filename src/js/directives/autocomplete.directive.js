APP.directive('fetchData', () => {

	let link = (scope, element, attrs) => {
		element.bind('keyup', function () {
			scope.checkComplete();
		});
	};

	return {
		restrict: 'A',
		link: link
	};
});
