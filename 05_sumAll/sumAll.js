const sumAll = function (a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    let low = Math.min(a, b);
    let high = Math.max(a, b);
    let sum = 0;
    for (let n = low; n <= high; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
