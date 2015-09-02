angular.module('test-app').config(function(ServerAPIProvider, $injector) {
  if($injector.has('TestDataService'))
    ServerAPIProvider.register('TestDataService');
});

angular.bootstrap(['test-app']);