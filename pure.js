//Pure - A pure function returns the same output for the same input. 
//Doesn't cause any side effects (It doesn't modifies).

function add(a, b){
    return a + b;
}
console.log("Addition of two num: ",add(2,2));

//Impure
let count = 0;
function increment(){
    count++;
}
increment();
console.log(count);
increment();
console.log(count); // it will display the different different results when we call.

// pure
function incrementPure(value) {
    return value + 1;   // no external modification
  }
  
  console.log(incrementPure(0));  // 1
  console.log(incrementPure(0));  // 1 (same input → same output)
  