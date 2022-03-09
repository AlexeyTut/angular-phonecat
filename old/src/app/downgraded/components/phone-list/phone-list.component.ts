import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { PhoneListComponent } from '@src/app/phone-list/phone-list.component';

angular.module('phonecat')
  .directive(
    'phoneListNew',
    downgradeComponent({
      component: PhoneListComponent,
      inputs: ['phones']
    }) as angular.IDirectiveFactory
  );
