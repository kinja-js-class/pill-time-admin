APP.factory('treatmentFctry', ($firebaseObject) => {

	
	let service,
		saveTreatment,
		root = new Firebase("https://incandescent-fire-8559.firebaseio.com");

	saveTreatment = (treatmentObj) => {
		let treatmentRef = root.child('treatments');
		treatmentRef.push(treatmentObj);
	};

	service = {
		save: saveTreatment
	};

	return service;


});
