'use strict';

/**
 * @ngdoc function
 * @name practiceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practiceApp
 */
angular.module('practiceApp')
  .controller('MainCtrl', function ($scope, customService, $sanitize) {
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
  });
