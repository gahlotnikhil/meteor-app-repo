angular.module('test-app').controller('DashboardCtrl', ['$scope', '$q', '$state', function ($scope, $q, $state) {
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
  }

  function showSpeechProgress(show) {
  	$scope.$apply(function() {
  		$scope.speechProgress = show;
  	});
  }

  $scope.fetchData = function() {
    	var data = [
          ['Date', 'Stock'],
          ['1-May-12',  1000],
          ['30-Apr-12',  1170],
          ['27-Apr-12',  660],
          ['26-Apr-12',  1030]];

    	var deferred = $q.defer();

    	deferred.resolve(data);

    	return deferred.promise;
	}
}]);