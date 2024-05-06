// Given array with duplicates
let arrNum = [1, 2, 3, 2, 8, 9, 8];

//  It will return an array of duplicated values from array
const duplicated = arrNum.filter((value,index,array)=>{
    return array.indexOf(value) !== index
})

console.log(duplicated)

