const removeFromArray = function () {
    // arguments is not actually an array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    // https://stackoverflow.com/questions/960866/how-can-i-convert-the-arguments-object-to-an-array-in-javascript
    // console.log(`arguments = ${arguments}`);
    // console.log(`is array ${Array.isArray(arguments)}`);
    let args = Array.from(arguments);
    let ary = args.shift();
    let toRemove = args;
    toRemove.forEach(item =>
        ary = ary.filter(element => element !== item)
    );
    return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
