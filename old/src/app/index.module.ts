import 'angular';
import 'angular-animate';
import '@uirouter/core';
import '@uirouter/angular-hybrid';
import '@uirouter/angularjs/release/stateEvents'
import { NgModule } from 'angular-ts-decorators';

@NgModule({
  id: 'phonecat',
  imports: [
    'ngAnimate',
    'ui.router',
    'core',
    'api',
    'phoneList',
    'phoneDetail'
  ]
})
export class AppModule {
  static moduleName = 'phonecat';
}
