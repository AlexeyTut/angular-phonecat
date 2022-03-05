import {phoneDetailModule} from "./phone-detail.module";

class PhoneDetailController {
  phone: any;
  mainImageUrl: string;

  constructor() {
    this.mainImageUrl = '';
  }

  $onInit() {
    this.setImage(this.phone.images[0]);
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  };

  onDblclick(imageUrl: string) {
    alert('You double-clicked image: ' + imageUrl);
  };
}

// Register `phoneDetail` component, along with its associated controller and template
phoneDetailModule.
    component('phoneDetail', {
    bindings: { phone: '<' },
    template: require('./phone-detail.template.html'),
    controller: PhoneDetailController
  });
