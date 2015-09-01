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
      
      // .state('partyDetails', {
      //   url: '/parties/:partyId',
      //   templateUrl: 'client/parties/views/party-details.ng.html',
      //   controller: 'PartyDetailsCtrl',
      //   resolve: {
      //     "currentUser": ["$meteor", function($meteor){
      //       return $meteor.requireUser();
      //     }]
      //   }
      // })
      // .state('login', {
      //   url: '/login',
      //   templateUrl: 'client/users/views/login.ng.html',
      //   controller: 'LoginCtrl',
      //   controllerAs: 'lc'
      // })
      // .state('register',{
      //   url: '/register',
      //   templateUrl: 'client/users/views/register.ng.html',
      //   controller: 'RegisterCtrl',
      //   controllerAs: 'rc'
      // })
      // .state('resetpw', {
      //   url: '/resetpw',
      //   templateUrl: 'client/users/views/reset-password.ng.html',
      //   controller: 'ResetCtrl',
      //   controllerAs: 'rpc'
      // })
      // .state('logout', {
      //   url: '/logout',
      //   resolve: {
      //     "logout": ['$meteor', '$state', function($meteor, $state) {
      //       return $meteor.logout().then(function(){
      //         $state.go('parties');
      //       }, function(err){
      //         console.log('logout error - ', err);
      //       });
      //     }]
      //   }
      // })

    $urlRouterProvider.otherwise("/dashboard");
  }]);