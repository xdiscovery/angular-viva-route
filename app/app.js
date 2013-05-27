/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  Based on work of:
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('mapsApp', []);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/maps',
            {
                controller: 'mapsController',
                templateUrl: '../angularViva/app/partials/maps.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/mapsorders/:customerID',
            {
                controller: 'mapsOrdersController',
                templateUrl: '../angularViva/app/partials/mapOrders.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: '../angularViva/app/partials/orders.html'
            })
        .when('/LD1',
            {
                controller: 'mapController',
                templateUrl: '../angularViva/app/partials/LD1.html'
            })
        .otherwise({ redirectTo: '/maps' });
});




