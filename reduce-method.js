const array1 = [1,2,3]

const value = array1.reduce((val1,val2)=>{
    return val1+val2;
},5)

console.log(value)

// Reduce function taking two parameters first is a callback function and second is initial value & reduce method returns a value
// Example : if initil value is 5 then it runs like
// 5+1 = 6
// 6+2 = 8
// 8+3 = 11