const removeFromArray = function(arr, ...removed) {
    let index
    for (i = 0; i < removed.length; i++) {
        while (arr.some((value) => value === removed[i])) {
            index = arr.findIndex(data => data === removed[i])
            arr.splice(index, 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
