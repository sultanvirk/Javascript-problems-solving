const string = "hello"

const capitalize = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize(string))

const string2 = "hello world"

const capitalizeString = (str) =>{
    var splitted= str.split(" ")
    var final = splitted.map((val)=>{
        return val.charAt(0).toUpperCase() + val.slice(1);
    })
    return final
}

console.log(capitalizeString(string2))