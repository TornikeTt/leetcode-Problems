var maxProduct = function(nums) {
    let newNums = sorting(nums)
    console.log(newNums)
    
    let result = (newNums[newNums.length - 1] - 1) * (newNums[newNums.length -2 ] - 1)
    return result
};

function sorting(nums) { 
    for ( let i = 0; i < nums.length; i++ ) { 
        let val = nums[i];
        let j = i - 1;

        while ( j >= 0 &&  nums[j] > val) { 
            nums[j+1] = nums[j]
            j = j - 1
        }
        nums[j+1] = val
    }

    return nums
}

maxProduct([3,4,5,2])
