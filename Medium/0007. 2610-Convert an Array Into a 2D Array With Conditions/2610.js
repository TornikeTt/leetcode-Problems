var findMatrix = function (nums) {
    let newArr = [];

    while (nums.length > 0) {
        let currUniqe = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (!currUniqe.has(nums[i])) {
                currUniqe.add(nums[i]);
                nums.splice(i, 1);
                i--;
            }
        }

        newArr.push(Array.from(currUniqe));
    }
    return newArr;
};

findMatrix([3, 5, 3, 3, 8, 3, 2, 5]);
// [ [ 3, 5, 8, 2 ], [ 3, 5 ], [ 3 ], [ 3 ] ]
