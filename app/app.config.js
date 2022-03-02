'use strict';

angular.
module('phonecatApp').
config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    var states = [{
      name: 'phones',
      url: '/phones',
      component: 'phoneList'
    },
    {
      name: 'phone',
      url: '/phones/{phoneId}',
      component: 'phoneDetail'
    }];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/phones');
  }
]);
