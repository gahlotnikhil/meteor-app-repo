(function() {
angular.module('test-app').directive('barChart', function() {


    var controller = ['$scope', '$q', '$attrs', '$parse', '$element', '$timeout', function ($scope, $q, $attrs, $parse, $element, $timeout) {

      $scope.init = function() {

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

      var chart = new google.visualization.BarChart($element.find('#barChart').get(0));

      addSelectionEvent(chart);

      exposeObject($attrs.refresh);

      renderChart($scope.dataTable, $scope.options);

      $scope.chart = chart;

    }

    function addSelectionEvent(chart) {
      google.visualization.events.addListener(chart, 'select', function(ss) {
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
        var currentScope = $scope.$parent;

        var dataFn = $parse(attr);
        var isFunction = attr.indexOf('(') != -1;

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
      } else {
        deferred.resolve(undefined);
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
    template: '<div id="barChart" ng-init="init()"></div>',
    link: function (scope, element, attr) {

    },
    controller: controller
  };

});

}());