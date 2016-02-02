APP.directive('fetchData', () => {

	let link = (scope, element, attrs) => {
		element.bind('keyup', function () {
			scope.$apply(() => {
				scope.fetchData(element.val(), attrs.fetchData);
			});
		});
	};

	return {
		restrict: 'A',
		link: link
	};
});
