
var myreduce= require("./basic_recursion.js");

function mycountWords(inputWords) {
	return myreduce(inputWords , function(previousValue, currentValue) {
		if ( previousValue[currentValue] === undefined )
			previousValue[currentValue]= 0;
		previousValue[currentValue]++;
		return previousValue;
	} , {});
}
 
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
console.log(mycountWords(inputWords))
    
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

