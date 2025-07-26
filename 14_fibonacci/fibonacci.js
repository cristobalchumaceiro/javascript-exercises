const fibonacci = function(x) {

    x = Number.parseInt(x)

    if (x === 0) {
        return 0
    }
    else if (x < 0) {
        return "OOPS"
    }
    
    const arr = new Array(x)

    if (x >= 2) {
        arr[0] = 1
        arr[1] = 1
    }
    else arr[0] = 1
    
    for (i = 2; i < x; i++) {
        arr[i] = (arr[(i-1)] + arr[(i-2)])
    }
    return arr[(x-1)]
};

// Do not edit below this line
module.exports = fibonacci;
