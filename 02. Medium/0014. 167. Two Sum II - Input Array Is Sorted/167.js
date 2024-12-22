var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const curSum = numbers[left] + numbers[right];

        if (curSum > target) {
            right--;
        } else if (curSum < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }

    return [];
};

twoSum([1, 2, 7, 11, 15], 9);
