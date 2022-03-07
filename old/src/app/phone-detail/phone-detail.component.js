'use strict'

angular.module('phoneDetail').component('phoneDetail', {
  bindings: { phone: '<' },
  template: require('./phone-detail.template.html'),
  controller: ['apiService', 'logService', 'logNewService', function PhoneDetailController(apiService, logService, logNewService) {
    var ctrl = this;
    this.mainImageUrl = '';

    this.$onInit = function() {
      this.setImage(this.phone.images[0]);
      apiService.getPhones().then(function(phones) {
        console.log('ngOnInit', phones);
        logService.log();
        logNewService.log();
      })
    }

    this.setImage = function(imageUrl) {
      this.mainImageUrl = imageUrl;
    };

    this.onDblclick = function onDblclick(imageUrl) {
      alert('You double-clicked image: ' + imageUrl);
    };
  }]
});
