'use strict';

/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceApp
 */
angular.module('practiceApp')
  .controller('MainCtrl', function ($scope, customService, $sanitize, $http, $q) {
    console.dir($q);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.defaultName = 'Incognito';
    $scope.$watch('defaultName', function(newName) {
      $scope.defaultName = $sanitize(newName);
      customService.warnLog('Name was sanitized.');
    });
    $scope.gitName = 'yaroslavputria';
    $scope.getRepos = function() {
      $http({
        method: 'GET',
        url: 'https://api.github.com/users/' + $scope.gitName + '/repos'
      }).then((res) => {
        $scope.reposNames = res.data.map((repo) => {
          return repo.name;
        });
        console.log($scope.reposNames);
      }, () => {

      });
    };
  });
