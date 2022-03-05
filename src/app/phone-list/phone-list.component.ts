import {phoneListModule} from "./phone-list.module";

class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  constructor() {
    this.phones = [];
    this.orderProp = 'age';
    this.query = '';
  }
}

// Register `phoneList` component, along with its associated controller and template
phoneListModule.
  component('phoneList', {
    bindings: { phones: '<' },
    template: require('./phone-list.template.html'),
    controller: PhoneListController
  });
