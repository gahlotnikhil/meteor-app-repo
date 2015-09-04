angular.module('test-app').controller('AppDataSecurityCtrl', ['$scope', '$q', '$state', '$stateParams', 'SecurityDataService', function ($scope, $q, $state, $stateParams, SecurityDataService) {
  $scope.speechIdentified = false;

  $scope.init = function() {

	// $scope.fetchData().then(function(data) {
	// 	$scope.data = data;
	// });

    // $stateParams._id
  }

  $scope.fetchData = function() {

    	var deferred = $q.defer();

    	SecurityDataService.getViolations($stateParams.application).then(function(data) {
    		deferred.resolve(data.data);
    	});

    	return deferred.promise;
	}

	$scope.geoColumns = [
	{
		type: 'string',
		label: 'Country'
	},
	{
		type: 'number',
		label: 'Violations'
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
      
      $scope.geoOptions = {
          // region: '155', 
          colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
          // backgroundColor: '#81d4fa',
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
        };

    $scope.onSelect = function(selection) {
      $scope.geoOptions.region = 111;

      $scope.refreshGeo();
      
    }


    $scope.fetchTimelineData = function() {

      var deferred = $q.defer();

      SecurityDataService.getViolationsByTimeLine($stateParams.application).then(function(data) {
        deferred.resolve(data.data);
      });

      return deferred.promise;
    }

    $scope.calColumns = [
    {
      type: 'date',
      label: 'Date'
    },
    {
      type: 'number',
      label: 'Violations'
    }];

    $scope.calOptions = {
         title: "Violations time line",
         width: '100%',
         height: 400,
         chartArea: {
            left: "25%",
            top: "3%",
            height: "80%",
            width: "100%"
         }
       };

    $scope.onCalSelect = function(selection) {
      //TODO
    }

}]);