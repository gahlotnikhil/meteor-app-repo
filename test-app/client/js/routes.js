angular.module("test-app").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'client/views/dashboard.ng.html',
        controller: 'DashboardCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'client/views/about.ng.html',
        controller: 'DashboardCtrl'
      })
      .state('predict', {
        url: '/predict',
        templateUrl: 'client/views/predict.ng.html',
        controller: 'PredictCtrl'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'client/views/search.ng.html',
        controller: 'PredictCtrl'
      })
      .state('infiniteScrollTable', {
        url: '/infiniteScrollTable',
        templateUrl: 'client/views/infiniteScrolling.ng.html',
        controller: 'DemoController'
      })
      .state('form', {
        url: '/form',
        templateUrl: 'client/views/form.ng.html',
        controller: 'formController'
      })
      .state('dataSecurity', {
        url: '/dataSecurity',
        templateUrl: 'client/views/security.ng.html',
        controller: 'DataSecurityCtrl'
      })
      .state('appDataSecurity', {
        url: '/appDataSecurity/:application',
        templateUrl: 'client/views/app-data-security.ng.html',
        controller: 'AppDataSecurityCtrl'
      })
      

    $urlRouterProvider.otherwise("/dashboard");
  }]);