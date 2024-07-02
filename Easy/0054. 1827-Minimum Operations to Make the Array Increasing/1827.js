var minOperations = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1] || nums[i] === nums[i + 1]) {
            let hold = nums[i] - nums[i + 1] + 1;
            count += hold;
            nums[i + 1] = nums[i] + 1;
        }
    }

    nums;

    return count;
};

console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([8]));

// [1, 5, 2, 4, 1]
// num[i] < nums[i+1]  1 < 5? yes

// [1, 5, 2, 4, 1]
// num[i] < nums[i+1]  5 < 2? no
// [1, 5, 2+4, 4, 1]

// [1, 5, 2+4, 4, 1]
// num[i] < nums[i+1]  6 < 4 no
// [1, 5, 2+4, 4+3, 1]

// [1, 5, 2+4, 4+3, 1]
// num[i] < nums[i+1]  7 < 1 no
// [1, 5, 2+4, 4+3, 1+7]

// [1, 5, 6, 7, 8]
