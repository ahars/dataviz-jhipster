'use strict';

angular.module('datavizApp')
    .controller('MainController', function ($scope, Principal) { // ADD the table here
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.showGraph2 = function(table, col1, col2, id, type1, type2) {
          var data1 = [];
          var data2 = [];
          table.query(function(result) {
            angular.forEach(result, function(item) {
              data1.push(item[col1]);
              data2.push(item[col2]);
            });
            $scope.configGraph2(id, data1, data2, type1, type2);
            c3.generate($scope.config);
          });
        };

        $scope.configGraph2 = function(id, data1, data2, type1, type2) {
          $scope.config = {};
          $scope.config.bindto = id;
          $scope.config.data = {};
          $scope.config.data.json = {};
          $scope.config.data.json.data1 = data1;
          $scope.config.data.json.data2 = data2;
          $scope.config.data.types = {'data1': type1, 'data2': type2};
        };

        // Exemple
        //$scope.showGraph2(TABLE3, 'a', 'b', '#chart1', 'line', 'line');
    });
