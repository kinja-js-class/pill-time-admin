APP.controller('adminCtrl', adminCtrl);

adminCtrl.$inject = ['$scope', 'treatmentFctry'];

function adminCtrl ($scope, treatmentFctry) {
	$scope.treatment = {};
	$scope.fetchData = fetchData;
	$scope.saveData = saveData;
	$scope.isComplete = false;

	
	function fetchData (queryString, queryTable) {
		$scope.treatment[queryTable] = queryString;

		$scope.isComplete = _isComplete();
	}

	function saveData () {
		treatmentFctry.save($scope.treatment);

		$scope.treatment = {};
	}

	function _isComplete () {
		let treatment = $scope.treatment;

		if ((Object.keys(treatment).length) === 3) {
			return Object.keys(treatment).every ((el) => {
				return treatment[el] !== '';
			});
		} else {
			return false;
		}
	}

}
	
