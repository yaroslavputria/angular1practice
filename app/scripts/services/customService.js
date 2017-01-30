'use strict';

angular.module('practiceApp')
  .factory('customService', function(){
    var pre = 'Factory is the best!  ';
    return {
      warnLog: function(str) {
        console.warn(pre + str);
      },
      errLog: function(str) {
        console.error(str);
      }
    };
  });