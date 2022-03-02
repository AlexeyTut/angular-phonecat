'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
  bindings: { phone: '<' },
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$stateParams',
      function PhoneDetailController() {
      }
    ]
  });
