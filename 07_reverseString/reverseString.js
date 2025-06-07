const reverseString = function(str) {
    let splitStr = str.split("")
    let reversedStr = []
    for (let i = 0; i < splitStr.length; i++) {
        reversedStr.unshift(splitStr[i])
    }
    reversedStr = reversedStr.join("")
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
