'use strict';

angular.
module('phonecat').
component('testPage', {
  template: require('./test-page.template.html'),
  controller: function TestPageController($scope) {
    $scope.date = {
      startDate: moment().subtract(1, "days"),
      endDate: moment()
    };
    window.X = $scope;
  }
});
