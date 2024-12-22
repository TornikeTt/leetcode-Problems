var minElement = function (nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let splitNums = nums[i].toString().split("");
        let sum = 0;

        for (let j = 0; j < splitNums.length; j++) {
            sum += +splitNums[j];
        }
        arr.push(sum);
    }

    return Math.min(...arr);
};

minElement([10, 12, 13, 14]);
