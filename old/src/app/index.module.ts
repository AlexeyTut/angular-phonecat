import 'angular';
import 'angular-animate';
import '@uirouter/core';
import '@uirouter/angular-hybrid';
import '@uirouter/angularjs/release/stateEvents';
// import 'bootstrap-daterangepicker-labworks' // required for angular-daterangepicker-labworks
// import 'angular-daterangepicker-labworks'
import { NgModule } from 'angular-ts-decorators';

@NgModule({
  id: 'phonecat',
  imports: [
    'ngAnimate',
    'ui.router',
    'core',
    'api',
    'daterangepicker',
  ]
})
export class AppModule {
  static moduleName = 'phonecat';
}
