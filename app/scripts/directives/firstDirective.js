'use strict';

angular.module('practiceApp')
  .directive('firstDirective', function() {
    return {
      link: function(scope) {
        console.log('First directive was connected.');
        console.log(scope.awesomeThings);
      },
      restrict: 'E',
      templateUrl: '../../templates/firstDirectiveTemplate.html'
    };
  });