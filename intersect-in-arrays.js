const array1 = [2, 4, 3, 5, 6, 6, 6, 4]
const array2 = [9, 5, 6, 4]

let intersectedArray = array1.filter((value) => {
    return array2.includes(value)

})

console.log([...new Set(intersectedArray)])