APP.controller('adminCtrl', ($scope, treatmentFctry) => {

	let checkComplete, saveData, _isComplete;

	checkComplete = () => {
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
	$scope.saveData = saveData;
	$scope.checkComplete = checkComplete;
	$scope.isComplete = false;
});
