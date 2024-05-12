const number = 0;

if(number==0){
    console.log("Please enter a number greater then 0")
}else{
    for(let i=0; i<=number;i++){
        if(number%i==0){
            console.log(i)
        }
    }
}