angular.module('test-app').controller('PredictCtrl', ['$scope', '$q', function ($scope, $q) {

	$scope.predictParams = {
		param1: 100
	};

	$scope.init = function() {
		//initAxes();
		google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);

      	if (annyang) {
	    	var currentScope = $scope;
	    	var commands = {
			    'Future :value': function(value) {
			    	currentScope.$apply(function(){
			    		value = nlp.value(value).number();
			    		if (value == undefined || value < 0) {
			    			value = 0;
			    		} else if (value > 100) {
			    			value = 100;
			    		}
			    		
			    		currentScope.predictParams.param1 = (value * 500) / 100; // 500 is max value
			    	});
			    	
			     }
			  };

			  // Add our commands to annyang
			  annyang.addCommands(commands);

			  // Start listening.
			  annyang.start();
	    }

		fetchData().then(function(result) {
			$scope.data = result;
			drawChart();

			$scope.$watch('predictParams.param1', function(value, oldValue) {
		   		if (oldValue != undefined && oldValue != value && $scope.ready == true) {
		   			var newdata = [
					          ['Date', 'Stock'],
					          ['1-Oct-15',  1000 + (value - oldValue)],
					          ['30-Nov-15',  1170],
					          ['27-Dec-15',  660 + (value - oldValue)],
					          ['26-Jan-16',  1030]];

					var data = google.visualization.arrayToDataTable(newdata);

					$scope.ready = false;
			        $scope.chart.draw(data, $scope.options);

		   		}
		    });
		    
		})
	};

	$scope.change = function() {
		
	};

	function drawChart() {
        
        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var data = google.visualization.arrayToDataTable($scope.data);

        chart = new google.visualization.AreaChart(document.getElementById('areaChart'));

		google.visualization.events.addListener(chart, 'ready',
	        function() {
	            $scope.ready = true;
	        });

		$scope.ready = false;
        chart.draw(data, options);

        $scope.chart = chart;

        $scope.options = options;
    }

	function fetchData () {

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