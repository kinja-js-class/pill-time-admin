APP.controller('adminCtrl', ($scope, treatmentFctry) => {

	let fetchData, saveData, _isComplete;

	fetchData = (queryString, queryTable) => {
		$scope.treatment[queryTable] = queryString;

		$scope.isComplete = _isComplete();
	};

	saveData = () => {
		treatmentFctry.save($scope.treatment);

		$scope.treatment = {};
	};

	_isComplete = () => {
		let treatment = $scope.treatment;

		if ((Object.keys(treatment).length) === 3) {
			return Object.keys(treatment).every ((el) => {
				return treatment[el] !== '';
			});
		} else {
			return false;
		}
	};

	$scope.treatment = {};
	$scope.fetchData = fetchData;
	$scope.saveData = saveData;
	$scope.isComplete = false;
});
