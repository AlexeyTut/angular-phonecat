import { downgradeInjectable } from '@angular/upgrade/static';
import { LogNewService } from '@src/app/services/utils/log-new.service';
import angular from 'angular';

angular.module('utils').factory('logNewService', downgradeInjectable(LogNewService));
