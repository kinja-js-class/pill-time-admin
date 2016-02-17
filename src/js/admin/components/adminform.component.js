APP.component('adminForm', {

	controller: function (patientFctry) {
		let checkComplete, saveData, _isComplete;

		checkComplete = () => {
			this.isComplete = _isComplete();
		};

		saveData = () => {
			let body = Object.assign({}, this.treatment);

			delete body.patient;

			patientFctry.save(this.treatment.patient, body);
			this.treatment = {};
		};


		_isComplete = () => {
			let treatment = this.treatment;
			if ((Object.keys(treatment).length) === 3) {
				return Object.keys(treatment).every(el => treatment[el] !== '');
			} else {
				return false;
			}
		};

		this.treatment = {};
		this.saveData = saveData;
		this.checkComplete = checkComplete;
		this.isComplete = false;
	},

	templateUrl: 'form.html',
	controllerAs: 'admin'
});
