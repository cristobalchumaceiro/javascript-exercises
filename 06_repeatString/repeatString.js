const repeatString = function(str, multi) {
    if (multi < 0) return "ERROR"
    let newStr = ""
    for (let i = 0; i < multi; i++) {
        newStr += str
    }
    return newStr
};

// Do not edit below this line
module.exports = repeatString;
