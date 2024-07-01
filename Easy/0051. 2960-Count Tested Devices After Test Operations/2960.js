var countTestedDevices = function (batteryPercentages) {
    let zero = 0;
    let count = 0;

    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] > zero) {
            count++;
            for (let j = i + 1; j < batteryPercentages.length; j++) {
                if (batteryPercentages[j] > 0) {
                    batteryPercentages[j] = batteryPercentages[j] - 1;
                }
            }
        }
    }

    return count;
};

console.log(countTestedDevices([1, 1, 2, 1, 3]));
console.log(countTestedDevices([0, 1, 2]));
