'use strict'

angular
  .module('api')
  .factory('apiService', ['$http', function($http) {
    return {
      getPhones: function() {
        return $http.get('assets/phones/phones.json').then(function(response) {
          return response.data;
        });
      },

      getPhone: function(id) {
        return $http.get('assets/phones/' + id + '.json').then(function(response) {
          return response.data;
        });
      }
    }
  }])



