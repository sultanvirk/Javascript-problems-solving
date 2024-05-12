let array1 = [1,2,3,4,5,6]

let array2 = [0,9,8,7]


// Combine array using Concate method
const finalArray = array1.concat(array2);
console.log(`Using concat method : ${finalArray}`)

// Combine array using spread operator
const newArray = [...array1,...array2]
console.log(`Using spread operator : ${newArray}`)


// Without using pre-built functions
function combineArrays(arr1, arr2) {
    const combined = [];

    // Iterate over elements of arr1 and push them into combined array
    for (let i = 0; i < arr1.length; i++) {
        combined.push(arr1[i]);
    }

    // Iterate over elements of arr2 and push them into combined array
    for (let i = 0; i < arr2.length; i++) {
        combined.push(arr2[i]);
    }

    return combined;
}

console.log(`Without pre-built function : ${combineArrays(array1,array2)}`)