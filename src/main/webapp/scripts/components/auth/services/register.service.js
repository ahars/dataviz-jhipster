'use strict';

angular.module('datavizApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


