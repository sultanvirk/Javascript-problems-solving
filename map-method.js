const array = [1,2,3,2];

const array1 = array.map((value, index, array)=>{
    return array.indexOf(value) == index
})
console.log(array)
console.log(array1)

// map method takes a callback function as an argument and return an Array