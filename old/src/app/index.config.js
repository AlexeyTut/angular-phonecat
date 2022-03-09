'use strict'

angular
  .module('phonecat')
  .config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {

    var states = [{
      name: 'phones',
      url: '/phones',
      template: '<phone-list-new [phones]="$resolve.phones"></phone-list-new>',
      resolve: {
        phones: ['apiService', function(apiService) {
          return apiService.getPhones();
        }]
      }
    },
      {
        name: 'phone',
        url: '/phones/{phoneId}',
        template: '<phone-detail-new [phone]="$resolve.phone"></phone-detail-new>',
        resolve: {
          phone: ['apiService', '$stateParams', function(apiService, $stateParams) {
            return apiService.getPhone($stateParams.phoneId);
          }]
        }
      }];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/phones');
  }
]);
