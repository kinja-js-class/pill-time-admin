APP.component('adminPage', {

	controller: function (patientFctry, $rootScope) {		
			debugger;
		let checkComplete = () => {
			this.isComplete = _isComplete();
		};

		patientFctry.getTreatments().then( (patients) => {
			this.patients = patients
		})

		let saveData = () => {
			let body = Object.assign({}, this.treatment);

			delete body.patient;

			patientFctry.save(this.treatment.patient, body);
			this.treatment = {};
		};


		let _isComplete = () => {
			let treatment = this.treatment;
			if ((Object.keys(treatment).length) === 3) {
				return Object.keys(treatment).every(el => treatment[el] !== '');
			} else {
				return false;
			}
		};

		this.treatment = {}
		this.saveData = saveData
		this.checkComplete = checkComplete
		this.isComplete = false
		this.onLogout = $rootScope.onLogout
	},

	templateUrl: 'partials/admin-page.html',
	controllerAs: 'admin'
});
