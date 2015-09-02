angular.module('test-app').controller('PredictCtrl', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {

	$scope.predictParams = {
		param1: 100
	};

	$scope.init = function() {
		//initAxes();
		// google.load("visualization", "1", {packages:["corechart"]});
      //google.setOnLoadCallback(drawChart);

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
		   			// var newdata = [
					   //        ['Date', 'Stock'],
					   //        ['1-Oct-15',  1000 + (value - oldValue)],
					   //        ['30-Nov-15',  1170],
					   //        ['27-Dec-15',  660 + (value - oldValue)],
					   //        ['26-Jan-16',  1030]];

					var newdata = $scope.data;

					newdata[2][1] = newdata[2][1] + (value - oldValue)/100;

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
        
        // var options = {
        //   title: 'Company Performance',
        //   hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        //   vAxis: {minValue: 0}
        // };

        var options = {
          title: 'Company Performance',
          width: 900,
          height: 500,
          hAxis: {
            format: 'M/d/yy',
            gridlines: {count: 15}
          },
          vAxis: {
            gridlines: {color: 'none'},
            minValue: 0
          }
        };

        var data = google.visualization.arrayToDataTable($scope.data);

        chart = new google.visualization.AreaChart(document.getElementById('areaChart'));

		google.visualization.events.addListener(chart, 'ready',
	        function() {
	            $scope.ready = true;
	        });

		$scope.ready = false;

        $timeout(function() {
	        chart.draw(data, options);
	    });
        $scope.chart = chart;

        $scope.options = options;
    }

	function fetchData () {

    	// var data = [
     //      ['Date', 'Stock'],
     //      ['1-May-12',  1000],
     //      ['30-Apr-12',  1170],
     //      ['27-Apr-12',  660],
     //      ['26-Apr-12',  1030]];

     	var data = [
     	[{label: 'Date', type: 'date'}, {label: 'Stock', type: 'number'}],
     	["2013-05-17",0.2],["2013-05-16",0.2],["2013-05-15",0.2],["2013-05-14",0.2],["2013-05-13",0.2],["2013-05-10",0.2],["2013-05-09",0.21],["2013-05-08",0.21],["2013-05-07",0.21],["2013-05-06",0.21],["2013-05-03",0.2],["2013-05-02",0.2],["2013-05-01",0.2],["2013-04-30",0.2],["2013-04-29",0.2],["2013-04-26",0.2],["2013-04-25",0.2],["2013-04-24",0.2],["2013-04-23",0.2],["2013-04-22",0.2],["2013-04-19",0.2],["2013-04-18",0.2],["2013-04-17",0.2],["2013-04-16",0.2],["2013-04-15",0.2],["2013-04-12",0.2],["2013-04-11",0.2],["2013-04-10",0.2],["2013-04-09",0.22],["2013-04-08",0.22],["2013-04-05",0.21],["2013-04-04",0.21],["2013-04-03",0.22],["2013-04-02",0.21],["2013-04-01",0.21]];


	    data.forEach(function(d) {
	        d[0] = moment(d[0]).toDate();
	    });

    	var deferred = $q.defer();

    	deferred.resolve(data);

    	return deferred.promise;
	}

}]);