//number in javascript
let x = 10;
let y = 3.14;
let z = -5;
console.log(x); // Output: 10
console.log(y); // Output: 3.14
console.log(z); // Output: -5
// Arithmetic operations
console.log(x + y); // Output: 13.14
console.log(x - y); // Output: 6.86
console.log(x * y); // Output: 31.400000000000002
console.log(x / y); // Output: 3.183098591549295
console.log(x % y); // Output: 0.8599999999999999
// Increment and decrement
x++; // x is now 11
y--; // y is now 2.14
console.log(x); // Output: 11
console.log(y); // Output: 2.14
// Exponentiation
console.log(x ** 2); // Output: 121
console.log(y ** 3); // Output: 9.772344000000001                     

// number methods
let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"
console.log(num.toExponential(2)); // Output: "3.14e+0"
console.log(num.toPrecision(3)); // Output: "3.14"
console.log(num.toString()); // Output: "3.14159"
console.log(Number.isInteger(x)); // Output: true
console.log(Number.isInteger(y)); // Output: false
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(num)); // Output: false  
console.log(Number.parseFloat("3.14")); // Output: 3.14
console.log(Number.parseInt("42")); // Output: 42
console.log(Number.parseInt("3.14")); // Output: 3
// Math object
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E); // Output: 2.718281828459045
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.abs(-5)); // Output: 5
console.log(Math.round(3.5)); // Output: 4
console.log(Math.floor(3.7)); // Output: 3
console.log(Math.ceil(3.2)); // Output: 4
console.log(Math.random()); // Output: A random number between 0 and 1

// Number constants
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// Type coercion with numbers
console.log("5" + 10); // Output: "510" (string concatenation)
console.log("5" - 10); // Output: -5 (string is coerced to a number)
console.log("5" * 10);
// Output: 50 (string is coerced to a number)
console.log("5" / 10); // Output: 0.5 (string is coerced to a number)
console.log("5" % 10); // Output: 5 (string is coerced to a number)

// NaN (Not-a-Number)
console.log(0 / 0); // Output: NaN
console.log(Math.sqrt(-1)); // Output: NaN
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(3.14)); // Output: false

// Infinity
console.log(1 / 0); // Output: Infinity
console.log(-1 / 0); // Output: -Infinity
console.log(Number.isFinite(Infinity)); // Output: false
console.log(Number.isFinite(-Infinity)); // Output: false
console.log(Number.isFinite(100)); // Output: true

//toString and toNumber
let num1 = 42;
let num2 = 3.14;
console.log(num1.toString()); // Output: "42"
console.log(num2.toString()); // Output: "3.14"
console.log(Number("42")); // Output: 42
console.log(Number("3.14")); // Output: 3.14
console.log(Number("abc")); // Output: NaN (not a valid number)

// properties of numbers
console.log(num1.toExponential()); // Output: "4.2e+1"
console.log(num1.toFixed(2)); // Output: "42.00"
console.log(num1.toPrecision(3)); // Output: "42.0"
console.log(num1.valueOf()); // Output: 42   

// isNaN and isFinite
console.log(isNaN(NaN)); // Output: true
console.log(isNaN(3.14)); // Output: false
console.log(isFinite(Infinity)); // Output: false
console.log(isFinite(-Infinity));  // Output: false
console.log(isFinite(100)); // Output: true  

//bigint
let bigInt1 = 123456789012345678901234567890n;
let bigInt2 = BigInt("123456789012345678901234567890");
console.log(bigInt1); // Output: 123456789012345678901234567890n
console.log(bigInt2); // Output: 123456789012345678901234567890n
console.log(bigInt1 + bigInt2); // Output: 246913578024691357802469135780n
console.log(bigInt1 * bigInt2); // Output: 152415787532388367501905199875019052100n
console.log(bigInt1 / bigInt2); // Output: 1n
console.log(bigInt1 % bigInt2); // Output: 0n
console.log(bigInt1 ** 2n); // Output: 152415787532388367501905199875019052100n
console.log(bigInt1.toString()); // Output: "123456789012345678901234567890"
console.log(BigInt("123456789012345678901234567890").toString()); // Output: "123456789012345678901234567890"


