const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [1, 2, 3, 4, 5,6]


// By using every() Method
const checkingArraysAreEqualOrNot = (arr1, arr2) => {
    // let lengthOfArr1 = arr1.length
    // return lengthOfArr1
    const areArrayshaveSameLength = arr1.length == arr2.length && arr1.every((val) => {
         if (arr2.indexOf(val) > -1) {
            return val=[arr2.indexOf(val)]
        }
    })
    return areArrayshaveSameLength

}

console.log(checkingArraysAreEqualOrNot(array1, array2))



// By using for loop

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}



console.log(arraysAreEqual(array1, array2));
