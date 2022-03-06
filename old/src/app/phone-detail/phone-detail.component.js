!(function() {
  'use strict'

  angular.module('phonecat').component('phoneDetail', {
    bindings: { phone: '<' },
    template: require('./phone-detail.template.html'),
    controller: function PhoneDetailController() {
      var ctrl = this;
      this.mainImageUrl = '';

      this.$onInit = function() {
        this.setImage(this.phone.images[0]);
      }

      this.setImage = function(imageUrl) {
        this.mainImageUrl = imageUrl;
      };

      this.onDblclick = function onDblclick(imageUrl) {
        alert('You double-clicked image: ' + imageUrl);
      };
    }
  });
})()



