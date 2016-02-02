APP.factory('treatmentFctry', treatmentFctry);

// treatmentFctry.$inject = ['$firebaseObject'];

function treatmentFctry ($firebaseObject) {
  var root = new Firebase("https://incandescent-fire-8559.firebaseio.com");
  var service = {
    save: saveTreatment
  };

  return service;

  function saveTreatment (treatmentObj) {
    var treatmentRef = root.child('treatments');
    treatmentRef.push(treatmentObj);
  }
}
