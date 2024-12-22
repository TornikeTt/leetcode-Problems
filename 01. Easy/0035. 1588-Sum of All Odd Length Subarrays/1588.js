var sumOddLengthSubarrays = function (arr) {
    let newArr = [];

    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 != 0) {
            let oddNumbers = i;
            let startPoint = 0;

            for (let j = 0; j < arr.length; j++) {
                if (oddNumbers > arr.length) {
                    break;
                }
                let s = arr.slice(startPoint, oddNumbers);
                startPoint++;
                oddNumbers++;

                newArr.push(...s);
            }
        }
    }

    return newArr.reduce((total, num) => num + total);
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
