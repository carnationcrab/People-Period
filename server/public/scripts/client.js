var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'percentCircle-directive', 'chart.js']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider, $mdThemingProvider, ChartJsProvider) {
  $locationProvider.hashPrefix('');
  $mdThemingProvider.theme('default').primaryPalette('red').accentPalette('orange').dark();
    // Configure all charts 
   
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/checkIn', {
      templateUrl: '/views/templates/checkIn.html',
      controller: 'CheckInController as cc',
    })
    .when('/dash', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'DashboardController as dc'
    })
    .otherwise({
      redirectTo: 'home'
    });
});