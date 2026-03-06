// Strings in JavaScript



const str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str[0]); // Output: "H"
console.log(str.charAt(0)); // Output: "H" // Both str[0] and str.charAt(0) return the first character of the string, which is "H".
console.log(str.indexOf("World")); // Output: 7 // The indexOf() method returns the index of the first occurrence of the specified value ("World") in the string. In this case, "World" starts at index 7 in the string "Hello, World!".

console.log(str.lastIndexOf("l")); // Output: 10 // The lastIndexOf() method returns the index of the last occurrence of the specified value ("l") in the string. In this case, the last "l" is at index 10 in the string "Hello, World!".

console.log(str.slice(0, 5)); // Output: "Hello" // The slice() method extracts a section of the string and returns it as a new string. In this case, it extracts characters from index 0 to index 4 (not including index 5), resulting in "Hello".

console.log(str.substring(7, 12)); // Output: "World" // The substring() method returns a portion of the string between the specified indices. In this case, it returns characters from index 7 to index 11 (not including index 12), resulting in "World".

console.log(str.toLowerCase()); // Output: "hello, world!" // The toLowerCase() method converts all characters in the string to lowercase. In this case, it converts "Hello, World!" to "hello, world!".

console.log(str.toUpperCase()); // Output: "HELLO, WORLD!" // The toUpperCase() method converts all characters in the string to uppercase. In this case, it converts "Hello, World!" to "HELLO, WORLD!".

console.log(str.trim()); // Output: "Hello, World!" // The trim() method removes whitespace from both ends of the string. In this case, there is no leading or trailing whitespace in "Hello, World!", so it returns the original string.

console.log(str.split(",")); // Output: ["Hello", " World!"] // The split() method divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array. In this case, it splits the string "Hello, World!" at the comma, resulting in an array with two elements: "Hello" and " World!".

console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!" // The replace() method replaces a specified value with another value in the string. In this case, it replaces "World" with "JavaScript", resulting in "Hello, JavaScript!".

// Template literals in JavaScript
const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: "Hello, my name is Alice and I am 30 years old." // Template literals allow for embedded expressions, which are indicated by the ${} syntax. In this case, the variables 'name' and 'age' are embedded within the string, resulting in a personalized greeting message.

// String interpolation using template literals
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: "The sum of 5 and 10 is 15." // In this example, the variables 'a' and 'b' are embedded within the string, and the expression '${a + b}' calculates the sum of 'a' and 'b', resulting in the final string "The sum of 5 and 10 is 15."


// Spread operator with strings
const str2 = "Spread";
const chars = [...str2];
console.log(chars); // Output: ['S', 'p', 'r', 'e', 'a', 'd'] // The spread operator can be used to convert a string into an array of its individual characters. In this case, the string "Spread" is spread into an array of characters, resulting in ['S', 'p', 'r', 'e', 'a', 'd'].


// Spread operator to create a new string
const originalStr = "Hello";
const newStr = [...originalStr].join("");
console.log(newStr); // Output: "Hello" // The spread operator is used to create an array of characters from the original string "Hello". Then, the join() method is used to concatenate the characters back into a single string, resulting in "Hello".

// Spread operator to create a new string with additional characters
const extendedStr = [...originalStr, " ", "World"].join("");
console.log(extendedStr); // Output: "Hello World" // The spread operator is used to create an array of characters from the original string "Hello", and additional characters (a space and "World") are added to the array. Then, the join() method concatenates all the characters into a single string, resulting in "Hello World".

// Spread operator to create a new string by combining multiple strings
const str1 = "Hello";
const str2 = "World";
const combinedStr = [...str1, " ", ...str2].join("");
console.log(combinedStr); // Output: "Hello World" // The spread operator is used to create an array of characters from both strings "Hello" and "World", with a space in between. Then, the join() method concatenates all the characters into a single string, resulting in "Hello World". 

// Spread operator to create a new string by repeating a string multiple times
const repeatedStr = [...str1, " ", ...str1].join("");
console.log(repeatedStr); // Output: "Hello Hello" // The spread operator is used to create an array of characters from the string "Hello", with a space in between, and then the same string is repeated again. The join() method concatenates all the characters into a single string, resulting in "Hello Hello".


// Spread operator to create a new string by reversing the characters of a string
const reversedStr = [...originalStr].reverse().join("");
console.log(reversedStr); // Output: "olleH" // The spread operator is used to create an array of characters from the original string "Hello". Then, the reverse() method is called on the array to reverse the order of the characters, and finally, the join() method concatenates the characters back into a single string, resulting in "olleH".


// Spread operator to create a new string by converting a string to uppercase
const upperStr = [...originalStr].map(char => char.toUpperCase()).join("");
console.log(upperStr); // Output: "HELLO" // The spread operator is used to create an array of characters from the original string "Hello". Then, the map() method is called on the array to convert each character to uppercase, and finally, the join() method concatenates the characters back into a single string, resulting in "HELLO".

// Spread operator to create a new string by converting a string to lowercase
const lowerStr = [...originalStr].map(char => char.toLowerCase()).join("");
console.log(lowerStr); // Output: "hello" // The spread operator is used to create an array of characters from the original string "Hello". Then, the map() method is called on the array to convert each character to lowercase, and finally, the join() method concatenates the characters back into a single string, resulting in "hello".

// Spread operator to create a new string by removing whitespace from a string
const strWithWhitespace = "  Hello World!  ";
const trimmedStr = [...strWithWhitespace.trim()].join("");
console.log(trimmedStr); // Output: "Hello World!" // The trim() method is called on the original string to remove leading and trailing whitespace. Then, the spread operator is used to create an array of characters from the trimmed string, and finally, the join() method concatenates the characters back into a single string, resulting in "Hello World!".

// Spread operator to create a new string by replacing characters in a string
const strToReplace = "Hello, World!";
const replacedStr = [...strToReplace.replace("World", "JavaScript")].join("");
console.log(replacedStr); // Output: "Hello, JavaScript!" // The replace() method is called on the original string to replace "World" with "JavaScript". Then, the spread operator is used to create an array of characters from the modified string, and finally, the join() method concatenates the characters back into a single string, resulting in "Hello, JavaScript!".

// Spread operator to create a new string by extracting a substring from a string
const strToExtract = "Hello, World!";
const extractedStr = [...strToExtract.slice(0, 5)].join("");
console.log(extractedStr); // Output: "Hello" // The slice() method is called on the original string to extract the substring from index 0 to index 4 (not including index 5). Then, the spread operator is used to create an array of characters from the extracted substring, and finally, the join() method concatenates the characters back into a single string, resulting in "Hello".

// Spread operator to create a new string by splitting a string into an array of substrings
const strToSplit = "Hello, World!";
const splitStr = [...strToSplit.split(",")].join("");
console.log(splitStr); // Output: "Hello World!" // The split() method is called on the original string to split it at the comma, resulting in an array of substrings. Then, the spread operator is used to create an array of characters from the first substring ("Hello") and the second substring (" World!"), and finally, the join() method concatenates all the characters back into a single string, resulting in "Hello World!".

// Spread operator to create a new string by repeating a string multiple times
const strToRepeat = "Hello";
const repeatedStr2 = [...strToRepeat, " ", ...strToRepeat, " ", ...strToRepeat].join("");
console.log(repeatedStr2); // Output: "Hello Hello Hello" // The spread operator is used to create an array of characters from the string "Hello", with spaces in between, and then the same string is repeated multiple times. The join() method concatenates all the characters into a single string, resulting in "Hello Hello Hello".


// Spread operator to create a new string by combining multiple strings with a separator
const str3 = "Hello";
const str4 = "World";
const combinedStr2 = [...str3, " - ", ...str4].join("");
console.log(combinedStr2); // Output: "Hello - World" // The spread operator is used to create an array of characters from both strings "Hello" and "World", with a separator (" - ") in between. Then, the join() method concatenates all the characters into a single string, resulting in "Hello - World".

// Spread operator to create a new string by converting a string to an array of words
const sentence = "Hello World!";
const words = [...sentence.split(" ")].join("");
console.log(words); // Output: "HelloWorld!" // The split() method is called on the original string to split it into an array of words. Then, the spread operator is used to create an array of characters from the first word ("Hello") and the second word ("World!"), and finally, the join() method concatenates all the characters back into a single string, resulting in "HelloWorld!".

// Spread operator to create a new string by converting a string to an array of characters and then back to a string
const originalString = "Hello, World!";
const newString = [...originalString].join("");
console.log(newString); // Output: "Hello, World!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the join() method concatenates all the characters back into a single string, resulting in "Hello, World!".

// Spread operator to create a new string by converting a string to an array of characters, modifying the array, and then converting it back to a string
const modifiedString = [...originalString].map(char => char === "o" ? "0" : char).join("");
console.log(modifiedString); // Output: "Hell0, W0rld!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the map() method is called on the array to replace all occurrences of the character "o" with "0". Finally, the join() method concatenates all the characters back into a single string, resulting in "Hell0, W0rld!".

// Spread operator to create a new string by converting a string to an array of characters, filtering the array, and then converting it back to a string

const filteredString = [...originalString].filter(char => char !== "o").join("");
console.log(filteredString); // Output: "Hell, Wrld!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the filter() method is called on the array to remove all occurrences of the character "o". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in "Hell, Wrld!".

// Spread operator to create a new string by converting a string to an array of characters, sorting the array, and then converting it back to a string
const sortedString = [...originalString].sort().join("");
console.log(sortedString); // Output: " !,HWdellloor" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the sort() method is called on the array to sort the characters in alphabetical order. Finally, the join() method concatenates all the sorted characters back into a single string, resulting in " !,HWdellloor".

// Spread operator to create a new string by converting a string to an array of characters, reversing the array, and then converting it back to a string
const reversedString = [...originalString].reverse().join("");
console.log(reversedString); // Output: "!dlroW ,olleH" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the reverse() method is called on the array to reverse the order of the characters. Finally, the join() method concatenates all the characters back into a single string, resulting in "!dlroW ,olleH".

// Spread operator to create a new string by converting a string to an array of characters, mapping the array, and then converting it back to a string
const mappedString = [...originalString].map(char => char === "l" ? "1" : char).join("");
console.log(mappedString); // Output: "He11o, Wor1d!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the map() method is called on the array to replace all occurrences of the character "l" with "1". Finally, the join() method concatenates all the characters back into a single string, resulting in "He11o, Wor1d!".


// Spread operator to create a new string by converting a string to an array of characters, filtering the array, mapping the array, and then converting it back to a string
const filteredMappedString = [...originalString]
  .filter(char => char !== "o")
  .map(char => char === "l" ? "1" : char)
  .join("");
console.log(filteredMappedString); // Output: "He11, W1r1d!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the filter() method is called on the array to remove all occurrences of the character "o". Next, the map() method is called on the filtered array to replace all occurrences of the character "l" with "1". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in "He11, W1r1d!".

// Spread operator to create a new string by converting a string to an array of characters, sorting the array, filtering the array, and then converting it back to a string
const sortedFilteredString = [...originalString]
  .sort()
  .filter(char => char !== "o")
  .join("");
console.log(sortedFilteredString); // Output: " !,HWdelllr" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the sort() method is called on the array to sort the characters in alphabetical order. Next, the filter() method is called on the sorted array to remove all occurrences of the character "o". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in " !,HWdelllr".    

// Spread operator to create a new string by converting a string to an array of characters, reversing the array, filtering the array, and then converting it back to a string
const reversedFilteredString = [...originalString]
  .reverse()
  .filter(char => char !== "o")
  .join("");
console.log(reversedFilteredString); // Output: "!dlrW ,lleH" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the reverse() method is called on the array to reverse the order of the characters. Next, the filter() method is called on the reversed array to remove all occurrences of the character "o". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in "!dlrW ,lleH".   

// Spread operator to create a new string by converting a string to an array of characters, mapping the array, filtering the array, and then converting it back to a string
const mappedFilteredString = [...originalString]
  .map(char => char === "l" ? "1" : char)
  .filter(char => char !== "o")
  .join("");
console.log(mappedFilteredString); // Output: "He11, W1r1d!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the map() method is called on the array to replace all occurrences of the character "l" with "1". Next, the filter() method is called on the mapped array to remove all occurrences of the character "o". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in "He11, W1r1d!".

// Spread operator to create a new string by converting a string to an array of characters, sorting the array, mapping the array, and then converting it back to a string
const sortedMappedString2 = [...originalString]
  .sort()
  .map(char => char === "l" ? "1" : char)
  .join("");
console.log(sortedMappedString2); // Output: " !,HWdellloor" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the sort() method is called on the array to sort the characters in alphabetical order. Next, the map() method is called on the sorted array to replace all occurrences of the character "l" with "1". Finally, the join() method concatenates all the characters back into a single string, resulting in " !,HWdellloor".


//string immutability and spread operator
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(0, 3);
console.log(sliced); // Output: [1, 2, 3] // The slice() method creates a new array containing the elements from index 0 to index 2 (not including index 3) of the original array. The original array remains unchanged.
const spread = [...original.slice(0, 3)];
console.log(spread); // Output: [1, 2, 3] // The spread operator is used to create a new array by spreading the elements from the sliced portion of the original array. The original array remains unchanged.


// Spread operator to create a new string by converting a string to an array of characters, sorting the array, mapping the array, filtering the array, and then converting it back to a string
const complexString = [...originalString]
  .sort()
     .map(char => char === "l" ? "1" : char)
     .filter(char => char !== "o")
     .join("");
console.log(complexString); // Output: " !,HWdelllr" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the sort() method is called on the array to sort the characters in alphabetical order. Next, the map() method is called on the sorted array to replace all occurrences of the character "l" with "1". Then, the filter() method is called on the mapped array to remove all occurrences of the character "o". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in " !,HWdelllr".


//string search and spread operator
const searchString = "Hello, World!";
const searchTerm = "World";
const foundIndex = [...searchString].findIndex(char => char === searchTerm[0]);
console.log(foundIndex); // Output: 7 // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the findIndex() method is called on the array to find the index of the first occurrence of the character that matches the first character of the search term "World". In this case, it finds the index of "W", which is 7 in the string "Hello, World!".


// Spread operator to create a new string by converting a string to an array of characters, filtering the array based on a search term, and then converting it back to a string
const filteredSearchString = [...searchString]
  .filter(char => char !== searchTerm[0])
  .join("");
console.log(filteredSearchString); // Output: "Hello, orld!" // The spread operator is used to create an array of characters from the original string "Hello, World!". Then, the filter() method is called on the array to remove all occurrences of the character that matches the first character of the search term "World". Finally, the join() method concatenates all the remaining characters back into a single string, resulting in "Hello, orld!". 