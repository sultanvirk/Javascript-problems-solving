// Filter Method takes a callback function as an argument and return an Array
// Filter method returns all matching values from an array but Find method returns only first matching value from array

// Example:-

const obj = [
    {name:'gulshan', age:30},
    {name:'Ali', age:20},
    {name:'Ghazamfer', age:30},
    {name:'Atiqa', age:29},
    {name:'Sobia', age:20}
]

const filterArray = obj.filter((value,index,array)=>{
    return value.age>=30
})
console.log(filterArray) // reterns all matching values


const findArray = obj.find((value,index,array)=>{
    return value.age>=30
})
console.log(findArray) // reterns first matching value