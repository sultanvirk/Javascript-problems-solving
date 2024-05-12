const number = 10

let fact = 1

if(number<0){
    console.log(`Fact of ${number} is not possible.`)
}else{
    for(let i=1; i<=number;i++){
        fact = fact*i
    }
    console.log(`Fact of ${number} is : ${fact}`)
}