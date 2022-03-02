'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
  bindings: { phone: '<' },
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$stateParams',
      function PhoneDetailController() {
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
    ]
  });
