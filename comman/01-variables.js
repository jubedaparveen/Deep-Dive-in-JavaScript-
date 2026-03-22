// variables in JavaScript

// 1. variable declaration using var
var name = "Alice";
console.log(name); // Output: Alice
// 2. variable declaration using let
let age = 30;
console.log(age); // Output: 30
// 3. variable declaration using const
const pi = 3.14;
console.log(pi); // Output: 3.14
// 4. variable reassignment
name = "Bob";
console.log(name); // Output: Bob
age = 25;
console.log(age); // Output: 25
// 5. const variable cannot be reassigned
// pi = 3.14159; // This will throw an error because 'pi' is a constant
// 6. variable scope
function testScope() {
  var localVar = "I am local";
  console.log(localVar); // Output: I am local
}    
testScope();
// console.log(localVar); // This will throw an error because 'localVar' is not defined outside the function  
// 7. variable hoisting
console.log(hoistedVar); // Output: undefined (due to hoisting, 'hoistedVar' is declared but not initialized)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted
// 8. block scope with let and const
if (true) {
  let blockVar = "I am block scoped";
     const blockConst = "I am also block scoped";
     console.log(blockVar); // Output: I am block scoped
     console.log(blockConst); // Output: I am also block scoped
}

// console.log(blockVar); // This will throw an error because 'blockVar' is not defined outside the block
// console.log(blockConst); // This will throw an error because 'blockConst' is not defined outside the block

