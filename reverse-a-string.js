const string = "Hello"

// Using reverse() Method
const reverseString = (str) => {
    let strToArray = str.split("")
    let reverseArray = strToArray.reverse();
    let arrayToString = reverseArray.join("")
    return arrayToString
}

console.log(reverseString(string))


// without using reverse() Method
const reveredString = (str) => {

    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
         reversed += str[i]
    }
    return reversed

}

console.log(reveredString(string))