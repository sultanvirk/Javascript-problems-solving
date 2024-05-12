const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Finding Even Number
let evenArray = []
const evenNumber = (array) => {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 == 0) {
            evenArray.push(array[i])
        }
    }
    return evenArray
}

console.log(`Even Numbers : ${evenNumber(array)}`)

// Finding Odd Number
let oddArray = []
const oddNumber = (array) => {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 !== 0) {
            oddArray.push(array[i])
        }
    }
    return oddArray
}

console.log(`Odd Numbers : ${oddNumber(array)}`)