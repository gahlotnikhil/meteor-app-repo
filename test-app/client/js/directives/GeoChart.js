
/*
Supported Properties:
  data: Function/Promise/Object
  columns: Function/Promise/Object
  options: Object
  refresh: Exposed function -> Change data/options/columns and call refresh() to Refresh the graph.
  on-select: Function(selection)

*/
(function() {
angular.module('test-app').directive('geoChart', function() {


    var controller = ['$scope', '$q', '$attrs', '$parse', '$element', '$timeout', function ($scope, $q, $attrs, $parse, $element, $timeout) {

    	$scope.init = function() {

        //google.load("visualization", "1", {packages:["geochart"]});

        getColumns().then(function(result) {
          $scope.columns = result;

          var dataTable = new google.visualization.DataTable();

          if (result != undefined) {
            result.forEach(function(column) {
              dataTable.addColumn(column);
            });
          }

          $scope.dataTable = dataTable;

          fetchData().then(function(result) {
            $scope.data = result;
            drawChart();
          })
        })
    	};

  	function drawChart() {
        
      $scope.dataTable.addRows($scope.data);

      var map = 'GeoChart';

      if ($scope.map == 'map') {
        map = 'Map';
      }

      var chart = new google.visualization[map]($element.find('#geoChart').get(0));

      addSelectionEvent(chart);

      // if (map != 'map') {

      //   google.visualization.events.addListener(chart, 'regionClick', function(region) {
      //     $scope.options.region = region;
      //     refresh();
      //   });
      // }

      exposeObject($attrs.refresh);

      renderChart($scope.dataTable, $scope.options);

      $scope.chart = chart;

    }

    function addSelectionEvent(chart) {
      google.visualization.events.addListener(chart, 'select', function() {
        if (chart.getSelection() == undefined || chart.getSelection().length ==0 
          || chart.getSelection()[0].row == undefined) {
          return;
        }

        var row = chart.getSelection()[0].row;
        var selectedData = [];

        $scope.columns.forEach(function(column, index) {
          selectedData.push($scope.dataTable.getValue(row, index));
        });

        var dataFn = $parse($attrs.onSelect);
        var isFunction = $attrs.onSelect.indexOf('(') != -1;

        if(isFunction) {
          var targetScope = $scope.$parent;
          var funcParams = {selection: selectedData};
          dataFn(targetScope, funcParams);
        }
      });
    }

    function renderChart(data, options) {
      $timeout(function() {
        $scope.chart.draw(data, options);
      });
    	
    }

    function getColumns (attr) {
      return fetchAttrValue($attrs.columns);
    }

    function fetchData (attr) {
      return fetchAttrValue($attrs.data);
    }

    function fetchAttrValue (attr) {
      var deferred = $q.defer();

      if (attr != undefined) {
      	var targetScope = $scope.$parent;

      	var dataFn = $parse(attr);
  		  var isFunction = attr.indexOf('(') != -1;

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
      } else {
        deferred.resolve(undefined);
      }

    	return deferred.promise;
    }

    function refresh() {
    	renderChart($scope.dataTable, $scope.options);
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
        options: "=options",
        map: "@map"
    },
    template: '<div id="geoChart" ng-init="init()"></div>',
    link: function (scope, element, attr) {

    },
    controller: controller
  };

});

}());