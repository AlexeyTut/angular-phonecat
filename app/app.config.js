'use strict';

angular.
module('phonecatApp').
config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    var states = [{
      name: 'phones',
      url: '/phones',
      component: 'phoneList',
      resolve: {
        phones: function(apiService) {
          return apiService.getPhones();
        }
      }
    },
    {
      name: 'phone',
      url: '/phones/{phoneId}',
      component: 'phoneDetail',
      resolve: {
        phone: function(apiService, $stateParams) {
          return apiService.getPhone($stateParams.phoneId);
        }
      }
    }];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/phones');
  }
]);
