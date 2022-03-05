import * as angular from 'angular';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';
import uiRouter from "@uirouter/angularjs";
import {apiModule} from "./services/api.module";
import {phoneListModule} from "./phone-list/phone-list.module";
import {phoneDetailModule} from "./phone-detail/phone-detail.module";
import "./services/api.service";
import "./phone-list/phone-list.component";
import "./phone-detail/phone-detail.component";

export const appModuleAngularJS = angular.module('phonecatApp', [
  uiRouter,
  phoneListModule.name,
  phoneDetailModule.name,
  apiModule.name
]);

appModuleAngularJS.config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    const states = [{
      name: 'phones',
      url: '/phones',
      component: 'phoneList',
      resolve: {
        phones: function(apiService: any) {
          return apiService.getPhones();
        }
      }
    },
    {
      name: 'phone',
      url: '/phones/{phoneId}',
      component: 'phoneDetail',
      resolve: {
        phone: function(apiService: any, $stateParams: any) {
          return apiService.getPhone($stateParams.phoneId);
        }
      }
    }];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/phones');
  }
])

