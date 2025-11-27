//currying- turns a function that takes multiple arguments into sequence of functions that each take one arguments.
// How currying works- A normal function f(a,b,c) that takes multiple arg. But curried function- is transformed into f(a)(b)(c)

//The first call f(a) returns a new function.
// This new function takes b as an argument and returns another new function.
// This final function takes c and then executes the original logic with all collected arguments

// Original function
// function add(a,b,c){
//     return a + b + c;
// }
// console.log(add(1,2,3));

// curried version
function curriedAdd(a){
    return function(b){
        return function(c){
            return a + b + c;
        };
    };
}
const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
const result = addOneAndTwo(3);
console.log(result);

console.log(curriedAdd(1)(2)(3));

//main purpose- To avoid repeating the same arg again and again.
const addTax = tax => price => price + (price * tax); //100 + (100 * 0.18), 200 + (200 * 0.18)
const gst = addTax(0.18);
console.log(gst(100));
console.log(gst(200));
// Here, addTax is a function that takes tax, it returns another function that takes price.

