angular.module('api').service('apiService', function($http) {
    var service = {
        getPhones: function() {
            return $http.get('phones/phones.json').then(function(response) {
                return response.data;
            });
        },

        getPhone: function(id) {
            return $http.get('phones/' + id + '.json').then(function(response) {
                return response.data;
            });
        }
    }

    return service;
})
