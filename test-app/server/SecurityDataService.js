angular.module('test-app').service('SecurityDataService', function($http, $q) {
  this.getUsersPerApplication = function () {

    var deferred = $q.defer();
    
	var data = {
		data: [
			['Product1', 5000],
			['Product2', 4000],
			['Product3', 10000],
			['Product4', 200]
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

  this.getViolationsByTimeLine = function(application) {
  	var deferred = $q.defer();
    
	var data = {
		data: [
          [ new Date(2012, 3, 13), 1 ],
          [ new Date(2012, 3, 14), 0 ],
          [ new Date(2012, 3, 15), 8 ],
          [ new Date(2012, 3, 16), 12 ],
          [ new Date(2012, 3, 17), 10 ],
          [ new Date(2013, 9, 4), 20 ],
          [ new Date(2013, 9, 5), 12 ],
          [ new Date(2013, 9, 12), 23 ],
          [ new Date(2013, 9, 13), 33 ],
          [ new Date(2013, 9, 19), 34 ],
          [ new Date(2013, 9, 23), 35 ],
          [ new Date(2013, 9, 24), 41 ],
          [ new Date(2013, 9, 30), 54 ]
        ]
   	};

   	// TODO
   	// Write Google query/rest calls to feth actual data instead of hard code values

    deferred.resolve(data);

    return deferred.promise;
  }

});