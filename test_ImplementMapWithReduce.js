
var arrayMap= require("./ImplementMapWithReduce.js");

    var nums = [1,2,3,4,5]
    
    // `map` is your exported function
    var output = arrayMap(nums, function double(item) {
      return item * 2
    })
    
    console.log(output) // => [2,4,6,8,10]


