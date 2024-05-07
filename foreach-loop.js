let array = [1,2,3,4,5,2]

let newArray = array.forEach((value,index,array)=>{
    // console.log(value+1)
    return value+1;
})
// ForEach loop takes a callback funtion as an argument and use to do operation on elememnts of array or objects