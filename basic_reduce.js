
/*
 Basic: Reduce
 Exercise 6 of 18


# Task

Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

## Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

## Arguments

  * inputWords: An array of random Strings.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unecessary functions e.g. helpers.

## Resources

  * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Boilerplate

    function countWords(inputWords) {
      // SOLUTION GOES HERE
    }
    
    module.exports = countWords


 » To print these instructions again, run: functional-javascript print
 » To execute your program in a test environment, run: functional-javascript run program.js
 » To verify your program, run: functional-javascript verify program.js
 » For help run: functional-javascript help
*/


function countWords(inputWords) {
	return inputWords.reduce(function(previousValue, currentValue) {
		if ( previousValue[currentValue] === undefined )
			previousValue[currentValue]= 0;
		previousValue[currentValue]++;
		return previousValue;
	} , {});
}
    
module.exports = countWords

