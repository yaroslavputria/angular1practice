'use strict';

angular.module('practiceApp')
  .directive('regDirective', function($compile) {
    return function(scope, el /*, attrs*/) {
      var regFormContent = `<input type="text" ng-model="defaultName">
        <input type="password">
        <button type="submit" ng-click="$event.preventDefault()">Send</button>`;
      var regForm = angular.element(regFormContent);
      var compileFn = $compile(regForm);
      compileFn(scope);
      el.append(regForm);
    };
  });
