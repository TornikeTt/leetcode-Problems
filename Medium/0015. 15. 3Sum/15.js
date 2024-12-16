var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    // nums = [ -4, -1, -1, 0, 1, 2, 2 ]
    // nums 2 = [ -2, 0, 0, 2, 2 ]
    for (let i = 0; i < nums.length; i++) {
        /* 
            If nums[i] > 0, then all subsequent elements 
            in the array (being sorted) will also be greater than zero.

            Since we cannot achieve a sum of zero with 
            all positive numbers, there is no point in continuing 
            the search once nums[i] is greater than zero.
        */
        if (nums[i] > 0) break;
        /* 
            Skip duplicate elements: 

            Ensures that the main loop doesn't 
            start processing from the same element 
            more than once, which optimizes 
            the outer loop iterations.
        */
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        // nums = [ -4, -1, -1, 0, 1, 2, 2 ]
        // nums 2 = [ -2, 0, 0, 2, 2 ]
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                // Add Triplet: adds the triplet to the result array.
                res.push([nums[i], nums[left], nums[right]]);
                /*
                    Update Pointers: 
                    
                    Both left and right pointers are moved to 
                    find new potential triplets.
                */
                left++;
                right--;
                /* 
                    Skip Duplicates: 

                    Ensures that after a valid triplet is found, 
                    any subsequent duplicates of the left element are skipped. 
                */
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    }
    // 1 - [-4, 2, 2], [-1, -1, 2], [-1, 0, 1];
    // 2 - [ -2, 0, 2 ]
    return res;
};

threeSum([-4, -1, -1, 0, 1, 2, 2]);
