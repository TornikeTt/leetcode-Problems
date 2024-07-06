var maxFrequencyElements = function (nums) {
    let maxF = find_Max_Frequency(nums);

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        if (count == maxF) {
            result++;
        }
    }

    return result;
};

function find_Max_Frequency(nums) {
    let max_frequency = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
                if (max_frequency < count) {
                    max_frequency = count;
                }
            }
        }
    }

    return max_frequency;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
console.log(maxFrequencyElements([19, 19, 19, 20, 19, 8, 19]));
