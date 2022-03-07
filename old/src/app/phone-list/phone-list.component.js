'use strict'

angular.module('phoneList').component('phoneList', {
  bindings: { phones: '<' },
  template: require('./phone-list.template.html'),
  controller: function PhoneListController() {
    this.orderProp = 'age';
  }
});
