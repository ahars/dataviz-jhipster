 'use strict';

angular.module('datavizApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-datavizApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-datavizApp-params')});
                }
                return response;
            }
        };
    });
