var maxProductDifference = function(nums) {
    let newNums = sorting(nums)
    return newNums[newNums.length - 1] * newNums[newNums.length - 2]  - newNums[0] * newNums[1]
};

function sorting(nums) { 
    for ( let i = 1; i < nums.length; i++ ) { 
        let val = nums[i]
        let j = i - 1;
        while( j >= 0 && nums[j] > val) { 
            nums[j+1] = nums[j]
            j = j - 1
        }
        nums[j+1] = val
    }
    return nums
}




maxProductDifference([5,6,2,7,4])
