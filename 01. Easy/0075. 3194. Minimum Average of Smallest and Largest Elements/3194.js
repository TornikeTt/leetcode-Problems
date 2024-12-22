var minimumAverage = function (nums) {
    let arr = [];

    while (nums.length) {
        let min = Math.min(...nums);
        let max = Math.max(...nums);
        arr.push((min + max) / 2);

        nums.splice(nums.indexOf(min), 1);
        nums.splice(nums.indexOf(max), 1);
    }
    return Math.min(...arr);
};

minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]);
