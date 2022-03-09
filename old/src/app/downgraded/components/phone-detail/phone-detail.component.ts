import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { PhoneDetailComponent } from '@src/app/phone-detail/phone-detail.component';

angular.module('phonecat')
  .directive(
    'phoneDetailNew',
    downgradeComponent({
      component: PhoneDetailComponent,
      inputs: ['phones']
    }) as angular.IDirectiveFactory
  );
