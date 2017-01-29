'use strict';

/**
 * @ngdoc function
 * @name practiceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the practiceApp
 */
angular.module('practiceApp')
  .controller('AboutCtrl', function ($scope, customService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    customService.warnLog($scope.awesomeThings[1] + 'is here!!!');
  });
