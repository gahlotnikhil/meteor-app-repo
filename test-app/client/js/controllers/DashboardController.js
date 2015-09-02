angular.module('test-app').controller('DashboardCtrl', ['$scope', '$q', '$state', 'TestDataService', function ($scope, $q, $state, TestDataService) {
  $scope.speechIdentified = false;

  $scope.init = function() {
  	if (annyang) {
	  // Let's define a command.
	  var commands = {
	    // 'hello': function() { alert('Hello world!'); },

	    // 'hey': function() { alert('Hello world!'); },
	    '(tapas) Future': function() { 
	    	$state.go( 'predict' );
	     }
	  };

	  // Add our commands to annyang
	  annyang.addCommands(commands);

	  // Start listening.
	  annyang.start();

	  annyang.addCallback('result', function (userSaid, commandText, phrases) {
		  console.log(userSaid); // sample output: 'hello'
		  console.log(commandText); // sample output: 'hello (there)'
		  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']

		  
		  showSpeechProgress(true);
		  //annyang.abort();
	  });

	  annyang.addCallback('resultMatch', function (userSaid, commandText, phrases) {
		  console.log(userSaid); // sample output: 'hello'
		  console.log(commandText); // sample output: 'hello (there)'
		  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']

		  showSpeechProgress(false);
	  });

	  annyang.addCallback('resultNoMatch', function (userSaid, commandText, phrases) {
		  console.log(userSaid); // sample output: 'hello'
		  console.log(commandText); // sample output: 'hello (there)'
		  console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']

		  showSpeechProgress(false);
	  });
	}

	$scope.fetchData().then(function(data) {
		$scope.data = data;
	});
  }

  function showSpeechProgress(show) {
  	$scope.$apply(function() {
  		$scope.speechProgress = show;
  	});
  }

  $scope.fetchData = function() {

    	var deferred = $q.defer();

    	TestDataService.getCompanyData().then(function(data) {
    		deferred.resolve(data.data);
    	});
    	//deferred.resolve(data);

    	return deferred.promise;
	}
}]);