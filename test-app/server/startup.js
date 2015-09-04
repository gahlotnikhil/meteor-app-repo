angular.module('test-app').config(function(ServerAPIProvider, $injector) {
  if($injector.has('TestDataService'))
    ServerAPIProvider.register('TestDataService');

  if($injector.has('SecurityDataService'))
    ServerAPIProvider.register('SecurityDataService');

});

