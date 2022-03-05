import {apiModule} from "./api.module";
import {IHttpService} from "angular";

apiModule.factory('apiService', function($http: IHttpService) {
    const service = {
        getPhones: async function() {
            return (await $http.get('assets/phones/phones.json')).data;
        },

        getPhone: async function(id: string) {
            return (await $http.get('assets/phones/' + id + '.json')).data;
        }
    }
    return service;
})
