// palindrome is a work which is same as we read it from reverse and start
// e-g : maddam, eye

var string = "eye"

const checkPalindrome = (str) => {
    // reverse the given string & compare both
    let reverseStr = str.split("").reverse().join('');
    return reverseStr == str ? true : false
}


console.log(checkPalindrome(string))