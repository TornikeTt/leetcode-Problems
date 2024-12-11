var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let longest = 0;

    // numSet = Set { 0: 100, 1: 4, 2: 200, 3: 1, 4: 3, 5: 2 }

    for (let num of numSet) {
        // num = 100 4 200 1 3 2

        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest; // return 4
};

longestConsecutive([100, 4, 200, 1, 3, 2]);
