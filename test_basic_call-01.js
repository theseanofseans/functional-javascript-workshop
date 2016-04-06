
var duckCount= require("./basic_call.js");

    var notDuck = Object.create({quack: true});
    var duck = {quack: true};

console.log( "notDuck hasOwnProperty quack=" + Object.prototype.hasOwnProperty.call(notDuck, 'quack') );
console.log( "duck hasOwnProperty quack=" + Object.prototype.hasOwnProperty.call(duck, 'quack') );

var duckCount2= require("./basic_call.js");
duckCount2.global_count= 0;
console.log( duckCount2( Object.create({quack: true}) , {quack: true} ,  Object.create({quack: true}) , {quack: true}) );

console.log( "---" );

//duckCount.global_count= 0;
//console.log( duckCount(duck, notDuck) );


