angular.module('test-app').controller('TestViewCtrl', ['$scope', '$state', function ($scope, $state) {

  $scope.init = function() {
    $state.go( 'dashboard' );
  }

  $scope.clickTab = function(tab)
  {
    $state.go( tab );
  }

  $scope.isState = function(tab) {
    return $state.is(tab);
  }

}]);