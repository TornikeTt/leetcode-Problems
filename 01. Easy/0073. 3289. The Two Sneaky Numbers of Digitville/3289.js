var getSneakyNumbers = function (nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                arr.push(nums[i]);
            }
        }
    }

    return arr;
};

getSneakyNumbers([0, 1, 1, 0]);
getSneakyNumbers([0, 3, 2, 1, 3, 2]);
getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]);
