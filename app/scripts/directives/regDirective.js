'use strict';

angular.module('practiceApp')
  .directive('regDirective', function($compile) {
    return function(scope, el /*, attrs*/) {
      var regFormContent = `<form action="">
        <input type="text">
        <input type="password">
        <button type="submit">Send</button>
      </form>`;
      var regForm = angular.element(regFormContent);
      var compileFn = $compile(regForm);
      compileFn(scope);
      el.append(regForm);
    };
  });