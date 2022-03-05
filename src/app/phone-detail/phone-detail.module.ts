import * as angular from 'angular';
import {coreModule} from "../core/core.module";
import "../core/checkmark/checkmark.filter";

// Define the `phoneDetail` module
export const phoneDetailModule = angular.module('phoneDetail', [
  coreModule.name
]);
