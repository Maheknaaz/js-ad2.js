//Function Composition means combining multiple functions together so the output of one function becomes the input of the next function.

const add2 = x => x + 2;
const multiply3 = x => x * 3;

const result = multiply3(add2(5)); 
console.log(result); // 21
