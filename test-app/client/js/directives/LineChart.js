(function() {
angular.module('test-app').directive('lineChart', function() {


  var controller = ['$scope', '$q', '$attrs', '$parse', '$element', '$timeout', function ($scope, $q, $attrs, $parse, $element, $timeout) {

  	$scope.init = function() {
  		//google.load("visualization", "1", {packages:["line"]});
      // google.load("visualization", "1", {packages:["corechart"]});

  		fetchData().then(function(result) {
  			$scope.data = result;
  			drawChart();
  		})
  	};

  	function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Stock');

      var arr = $scope.data;

      data.addRows(arr);

        var options = {
          title: 'Company Performance',
          hAxis: {
            format: 'M/d/yy',
            gridlines: {count: 5}
          },
          vAxis: {
            gridlines: {color: 'none'},
            minValue: 0
          }
        };
        
        chart = new google.visualization.LineChart($element.find('div').get(0));

        exposeObject($attrs.refresh);

        renderChart(data, options);

        $scope.chart = chart;
        $scope.options = options;
    }

    function renderChart(data, options) {
    	$timeout(function() {
        $scope.chart.draw(data, options);
      });
    }

    function fetchData () {
    	var targetScope = $scope.$parent;
    	var deferred = $q.defer();

    	var dataFn = $parse($attrs.data);
  		var isFunction = $attrs.data.indexOf('(') != -1;

  		if(isFunction) {
  			var object = dataFn(targetScope);

  			// Function returning deferred promise
  			if (angular.isFunction(object.then)) {
  				object.then(function(data) {
  					deferred.resolve(data);
  				}, function(error) {
  					deferred.reject(error);
  				});
  			} else { // Function returning data
  				deferred.resolve(object);
  			}
  		} else { // Plain object
  			var object = dataFn(targetScope);
  			deferred.resolve(object);
  		}

    	return deferred.promise;
    }

    function refresh() {
    	renderChart($scope.data, $scope.options);
    }

    function exposeObject(attr) {
  		if (angular.isDefined(attr) && attr != '') {
  			var attrAssignable = $parse(attr).assign;
  			if (attrAssignable) {
  				attrAssignable($scope.$parent, refresh);
  			} else {
  				trace.info('Could not expose object for: ' + attr + ', expression is not an assignable.');
  			}
  		}
  	}
          
  }];

  return {
    restrict: 'EA',
    scope: {
    	// text: "@myText",
     //    twoWayBind: "=myTwoWayBind",
     //    oneWayBind: "&myOneWayBind"
        options: "=options"
    },
    template: '<div id="lineChart" ng-init="init()"></div>',
    link: function (scope, element, attr) {

    },
    controller: controller
  };

});

}());