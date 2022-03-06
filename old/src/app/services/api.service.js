!(function() {
  'use strict'

  angular
    .module('phonecat')
    .factory('apiService', function($http) {
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
  })

})()



