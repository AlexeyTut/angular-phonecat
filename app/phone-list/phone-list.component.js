'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    bindings: { phones: '<' },
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController() {
      this.orderProp = 'age';
    }]
  });
