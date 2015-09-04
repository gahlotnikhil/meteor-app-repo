angular.module('test-app').service('SecurityDataService', function($http, $q) {
  this.getUsersPerApplication = function () {

    var deferred = $q.defer();
    
	var data = {
		data: [
			['InvestOne', 5000],
			['Investran', 4000],
			['Infinity', 10000],
			['ControlCenter', 200]
		]
   	};

   	// TODO
   	// Write Google query/rest calls to feth actual data instead of hard code values

    deferred.resolve(data);

    return deferred.promise;
  };


  this.getViolations = function(application) {
  	var deferred = $q.defer();
    
	var data = {
		data: [
          ['Germany', 20],
          ['United States', 30],
          ['Brazil', 40],
          ['Canada', 50],
          ['France', 60],
          ['RU', 70],
          ['India', 100],
          ['China', 250]
        ]
   	};

   	// TODO
   	// Write Google query/rest calls to feth actual data instead of hard code values

    deferred.resolve(data);

    return deferred.promise;
  }

});