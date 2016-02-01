/*global angular */

APP.controller('adminCtrl', adminCtrl);


function adminCtrl ($scope) {
	$scope.treatment = {};
	$scope.fetchData = fetchData;
	$scope.isComplete = false;

	
	function fetchData (queryString, queryTable) {
		$scope.treatment[queryTable] = queryString;

		$scope.isComplete = isComplete();
	}

	function isComplete () {
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
	
