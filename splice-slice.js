const array = [2, 1, 3, 5, 6, 4]



// Slice Method
// Slice takes two arguments 
// slice(Start index, End index)

console.log(`actual array : ${array}`)

const newSliceArray = array.slice(0, 4)

console.log(`Slice method : ${newSliceArray}`)



// Splice can take 3 arguments
// splice(Start Index, How many values to delete, New values to add)

let removed = array.splice(1, 2, 8); // Removes 2 elements starting from index 1
console.log(`After deleting and adding elements from Array : ${array}`); 
console.log(`Removed elements from array ${removed}`); 