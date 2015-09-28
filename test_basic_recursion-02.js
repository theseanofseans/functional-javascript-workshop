
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
var myreduce= require("./basic_recursion.js");

var ret= myreduce([0, 1, 2, 3, 4] , function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);

console.log( "ret=" + ret );

