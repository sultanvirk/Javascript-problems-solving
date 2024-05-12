let array1 = [1,3,5,6]
let array2 = [4,2,3,6]

// using spread operator to concate both arrays
const unionArray = [...array1,...array2]
// ...new Set method to remove duplicates
console.log([...new Set(unionArray)].sort())