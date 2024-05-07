const array =[1,2,14,3,5,6]

// Find minimum value from array
const minFunction=(arr)=>{
    return arr.reduce((previous,current)=>{
        return previous>current? current : previous
    })
}

console.log(`Minimum value : ${minFunction(array)}`)


// Find maximum value from array

const maxFunction=(arr)=>{
    return arr.reduce((previous,current)=>{
        return current>previous? current : previous
    })
}

console.log(`Maximum value : ${maxFunction(array)}`)