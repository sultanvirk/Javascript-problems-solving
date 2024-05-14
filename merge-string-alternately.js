// The alternatively merged array is like if we have
// string1 = "abc"
// string2 = "xyz"
// mergedString = "axbycz"

const mergeStringAlternateluy = (str1, str2) => {

    const mergedArray = []
    let minLength = Math.min(str1.length, str2.length)

    for (let i = 0; i <= minLength; i++) {
        mergedArray.push(str1[i])
        mergedArray.push(str2[i])
    }
    const output = mergedArray.join("")

    return output
}

console.log(mergeStringAlternateluy('abc', 'wxyz'))