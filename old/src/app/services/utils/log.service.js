'use strict'

angular
  .module('log')
  .factory('logService', [function() {
    return {
      log: function() {
        console.log('LOG SERVICE', new Date().getTime());
      }
    }
  }])



