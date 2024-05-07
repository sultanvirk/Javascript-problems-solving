const array = [2, 6, 4, 8, 10, 23, 99]

const secondLargestVal=(arr)=>{
    // Get first largest value
    let firstLargestVal = Math.max(...arr)
    // Get index of first largest value
    let index = arr.indexOf(firstLargestVal)
    // delete first largest value
    arr.splice(index,1)
    
    // Now searching for largest value from array
    let secondLargestVal=Math.max(...arr)
    // return the largest value of array as a second largest value
    return secondLargestVal
}

console.log(secondLargestVal(array))