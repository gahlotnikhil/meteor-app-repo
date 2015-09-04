angular.module('test-app').controller('DataSecurityCtrl', ['$scope', '$q', '$state', 'SecurityDataService', function ($scope, $q, $state, SecurityDataService) {
  $scope.speechIdentified = false;

  $scope.init = function() {

	// $scope.fetchData().then(function(data) {
	// 	$scope.data = data;
	// });
  }

  	$scope.fetchData = function() {

    	var deferred = $q.defer();

    	SecurityDataService.getUsersPerApplication().then(function(data) {
    		deferred.resolve(data.data);
    	});

    	return deferred.promise;
	}

	$scope.colChartCols = [
	{
		type: 'string',
		label: 'Company'
	},
	{
		type: 'number',
		label: 'Users'
	}];

	// $scope.options = {
      //   title: 'Company Performance',
      //   hAxis: {
      //     format: 'M/d/yy',
      //     gridlines: {count: 5}
      //   },
      //   vAxis: {
      //     gridlines: {color: 'none'},
      //     minValue: 0
      //   }
      // };

    $scope.onSelect = function(data) {
  		//alert("selected : " + data);

  		$state.go( 'appDataSecurity', { application: data[0] } );
  	}

}]);