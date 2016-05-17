'use strict';
module.exports = (function() {
  // var secretNumberGenerator will be assigned to this file/iife and will return this following function

  return function() {
    // this return function is assigned to secretNumber variable
    // when invoked, secretNumberGenerator returns a random number
    var newNum = (Math.random() * 10000) + 1;
    // and also returns a function to generate that number
    return function(){
      return newNum;
    };
  };
})();