APP.factory('patientFctry', ($firebaseObject) => {

	
	let service,
		savePatient,
		root = new Firebase("https://incandescent-fire-8559.firebaseio.com");

	savePatient = (name, body) => {
		let patientRef = root.child('patients');

		patientRef.child(name).child('treatments').push(body);
	};

	service = {
		save: savePatient
	};

	return service;


});
