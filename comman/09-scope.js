//Scope in JavaScript
// 1. Global Scope
var globalVar = "I am a global variable";
console.log(globalVar); // Output: I am a global variable
// 2. Function Scope
function testFunctionScope() {
  var functionVar = "I am a function variable";
  console.log(functionVar); // Output: I am a function variable
}
testFunctionScope();
// console.log(functionVar); // This will throw an error because 'functionVar' is not defined outside the function
// 3. Block Scope
if (true) {
  let blockVar = "I am a block variable";
  const blockConst = "I am also a block constant";
  console.log(blockVar); // Output: I am a block variable
  console.log(blockConst); // Output: I am also a block constant
}
// console.log(blockVar); // This will throw an error because 'blockVar' is not defined outside the block
// console.log(blockConst); // This will throw an error because 'blockConst' is not defined outside the block
// 4. Lexical Scope
function outerFunction() {
     var outerVar = "I am an outer variable";
     function innerFunction() {
         var innerVar = "I am an inner variable";
         console.log(outerVar); // Output: I am an outer variable (inner function has access to outer function's variables)
           console.log(innerVar); // Output: I am an inner variable
     }
     innerFunction();
     // console.log(innerVar); // This will throw an error because 'innerVar' is not defined in the outer function
}

outerFunction();


