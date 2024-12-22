var countCompleteDayPairs = function (hours) {
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        for (let j = i + 1; j < hours.length; j++) {
            if ((hours[i] + hours[j]) % 24 == 0) {
                count += 1;
            }
        }
    }

    return count;
};

console.log(countCompleteDayPairs([12, 12, 30, 24, 24]));
console.log(countCompleteDayPairs([72, 48, 24, 3]));
