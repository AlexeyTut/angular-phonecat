import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { PhoneListNewComponent } from '@src/app/phone-list/phone-list.component';

angular.module('phonecat')
  .directive(
    'phoneListNew',
    downgradeComponent({
      component: PhoneListNewComponent,
      inputs: ['phones']
    }) as angular.IDirectiveFactory
  );
