'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$stateParams',
      function PhoneDetailController($http, $stateParams) {
        var self = this;

        $http.get('phones/' + $stateParams.phoneId + '.json').then(function(response) {
          self.phone = response.data;
        });
      }
    ]
  });
