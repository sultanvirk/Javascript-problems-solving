// Question. What will be the output of :
const f = new Boolean(false); // f is an onbect because of new keyword. f is not a variable with bool value.

if (f) {
    console.log(1) // output is 1 because f contains an object
} else {
    console.log(2)
}
console.log(typeof (f)); // Out put is object because f is object due to new keyword

//  ***********************************

// Q. What will bethe output of : 
console.log(+"") // plus operator can convert the string values to number so the answer is 0 because the value of empty string is 0.

// Q. What will be the output of :
console.log(!!!false) // The output will be true because first NOT operator inverts the false to true. Second NOT operator inverts the true to false. Now third NOT operator will invert the false value to true. Thats it

// Q. What will be the output of :
console.log(typeof typeof 1) // output is string because 1 is a number, so typeof 1 returns the string "number" and then typeof "number" will return string