!(function() {
  'use strict'

  angular.module('phonecat').component('phoneList', {
    bindings: { phones: '<' },
    template: require('./phone-list.template.html'),
    controller: ['$http', function PhoneListController() {
      this.orderProp = 'age';
    }]
  });

})()



