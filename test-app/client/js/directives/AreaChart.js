(function() {
angular.module('test-app').directive('areaChart', function() {


  var controller = ['$scope', '$q', '$attrs', '$parse', '$element', function ($scope, $q, $attrs, $parse, $element) {

  	$scope.init = function() {
		google.load("visualization", "1", {packages:["corechart"]});
      	google.setOnLoadCallback(drawChart);

		fetchData().then(function(result) {
			$scope.data = result;
			drawChart();
		})
	};

	function drawChart() {
        
        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        options = angular.isDefined($scope.options) ? $scope.options : options;

        var data = google.visualization.arrayToDataTable($scope.data);

        chart = new google.visualization.AreaChart($element.find('#areaChart').get(0));

        exposeObject($attrs.refresh);

        renderChart(data, options);

        $scope.chart = chart;
        $scope.options = options;
    }

    function renderChart(data, options) {
    	chart.draw(data, options);
    }

    function fetchData () {
    	var currentScope = $scope.$parent;
    	var deferred = $q.defer();

    	var dataFn = $parse($attrs.data);
		var isFunction = $attrs.data.indexOf('(') != -1;

		if(isFunction) {
			var object = dataFn(currentScope);

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
			var object = dataFn(currentScope);
			deferred.resolve(object);
		}

    	return deferred.promise;
    }

    function refresh() {
    	renderChart($scope.data, $scope.options);
    }

    function exposeObject(attr) {
		if (angular.isDefined(attr) && attr != '') {
			var dialogAttrAssignable = $parse(attr).assign;
			if (dialogAttrAssignable) {
				dialogAttrAssignable($scope.$parent, refresh);
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
    template: '<div id="areaChart" ng-init="init()"></div>',
    link: function (scope, element, attr) {

    },
    controller: controller
  };

});

}());