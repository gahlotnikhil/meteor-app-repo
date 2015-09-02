angular.module('test-app').controller('DemoController', function($scope) {
  $scope.images = [{'id':1,'name':'Abhay'},
  {'id':2,'name':'Abhay'},
  {'id':3,'name':'Abhay'},
  {'id':4,'name':'Abhay'},
  {'id':5,'name':'Abhay'},
  {'id':6,'name':'Abhay'},
  {'id':7,'name':'Abhay'},
  {'id':8,'name':'Abhay'}];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1].id;
    for(var i = 1; i <= 8; i++) {
      $scope.images.push({'id':last + i,'name':'Johnson'});
    }
  };
});