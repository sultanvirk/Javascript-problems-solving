// Given array with duplicates
let arrNum = [1, 9, 3, 2, 8, 9, 8];

// Use the filter method to remove duplicacy
let uniqueArray = arrNum.filter((value, index, array) => {
    // Return true if the current value is the first occurrence of this value in the array
    return array.indexOf(value) == index;

});

// Now 'uniqueArray' contains the elements of 'arrNum' without duplicates
console.log(uniqueArray);

// To sort array we use array.sort() method

console.log(`Sorted array  : ${uniqueArray.sort()}`)