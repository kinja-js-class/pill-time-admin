APP.factory('patientFctry', ($firebaseObject, $q) => {

	const FIREBASE_ROOT = new Firebase("https://incandescent-fire-8559.firebaseio.com");

	let _savePatient = (name, body) => {
		let patientRef = FIREBASE_ROOT.child('patients');

		patientRef.child(name).child('treatments').push(body);
	}

	let _getTreatments = () => {
		let patients = FIREBASE_ROOT.child('patients')

		return $q( (resolve, reject) => {
			patients.on('value', (snapshot) => {
				resolve(snapshot.val())
			}, (errorObject) => {
				reject(errorObject)
			})
		})
	}

	let service = {
		save: _savePatient,
		getTreatments: _getTreatments
	};

	return service;


});
