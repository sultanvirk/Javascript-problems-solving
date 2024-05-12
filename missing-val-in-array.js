let array = [1, 2, 3, 4, 5, 7, 9, 10]

// Find missing values from array
const missingArrayValues = []

const missingVal = (arr) => {
    minVal = Math.min(...arr)
    maxVal = Math.max(...arr)
    for (let i = minVal; i <= maxVal; i++) {
        if (arr.indexOf(i) < 0)
            missingArrayValues.push(i)
        // array.splice(arr.indexOf(i),0,i)
    }

    return(missingArrayValues)
    
}
console.log(missingVal(array))