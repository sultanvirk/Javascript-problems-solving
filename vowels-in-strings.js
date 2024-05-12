
const vowels = ['a', 'e', 'i', 'o', 'u']

const string = "Hi i am a javascript developer"

let arr = []
const checkVowels = (str) => {
    let count = 0
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++
            arr.push(letter)
        }
    }
    return count
}


console.log(`Count of vowel numbers : ${checkVowels(string)}`)

const vowelNumbersInString = arr.filter((value,index,array)=>{
    return array.indexOf(value) == index
})

console.log(`Vowel Numbers In String  = ${vowelNumbersInString}`)