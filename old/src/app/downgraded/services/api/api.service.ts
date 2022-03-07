import { downgradeInjectable } from '@angular/upgrade/static';
import { ApiService } from "@src/app/services/api/api.service";
import angular from 'angular';

angular.module('api').factory('apiService', downgradeInjectable(ApiService));
