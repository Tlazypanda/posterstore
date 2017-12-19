'use strict';

// Declare app level module which depends on views, and components
angular.module('templatestore', [
  'ngRoute',
  'templatestore.view1',
  'templatestore.view2',
  'templatestore.templates'
]).
config(['$routeProvider', function( $routeProvider) {
 

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
