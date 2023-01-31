const leapYears = function (year) {
    // In general, the rule is divisible by 4
    if (year % 4 != 0) {
        return false;
    }
    // But even if a year *is* divisible by 4,
    // it's *not* a leap year if it's divisible by 100
    if (year % 100 == 0) {
        // Unless it's also divisible by 400,
        // then it *is* a leap year
        if (year % 400 == 0) {
            return true;
        }
        return false;
    }

    // If we get this far, it's a normal leap year
    return true;
};

// Do not edit below this line
module.exports = leapYears;
