const removeFromArray = function (ary, ...toRemove) {
    toRemove.forEach(item =>
        ary = ary.filter(element => element !== item)
    );
    return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
