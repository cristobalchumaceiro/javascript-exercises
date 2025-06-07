const sumAll = function(a, b) {
    if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
        if (a < b) return ((((b - a) + 1) / 2) * (a + b))
        else return ((((a - b) + 1) / 2) * (b + a)) 
    }
    else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
