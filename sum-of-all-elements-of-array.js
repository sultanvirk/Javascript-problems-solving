const array = [1,2,6,4,3]

// Addition using reduce
let value = array.reduce((previous,current)=>{
    return previous+current
})
console.log(value)



// Addition using for loop

let sum=0

for(let i=0; i<=array.length-1;i++){
    sum += array[i]
}
console.log(sum)