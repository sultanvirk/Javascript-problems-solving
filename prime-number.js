const number = 20

if(number===1){
    console.log(`${number} is not a prime number neither composit`)
}else if(number<1){
    console.log(`Factorial of ${number} is not possible`)
}else if(number%2==0){
    console.log(`${number} is not a prime number`)
}else{
    console.log(`${number} is a prime number`)
}