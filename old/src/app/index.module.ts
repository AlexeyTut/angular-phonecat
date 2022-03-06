import 'angular';
import 'angular-animate';
import '@uirouter/core';
import '@uirouter/angular-hybrid';
import '@uirouter/angularjs/release/stateEvents'
// import '@uirouter/angularjs/release/stateEvents' // for state events working, now it's deprecated and disabled by default
import {NgModule} from 'angular-ts-decorators';

@NgModule({
  id: 'phonecat',
  imports: [
    'ngAnimate',
    'ui.router',
  ]
})
export class AppModule {
  static moduleName = 'phonecat';
}
