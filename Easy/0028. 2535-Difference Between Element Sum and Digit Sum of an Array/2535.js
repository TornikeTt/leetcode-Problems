var differenceOfSum = function(nums) {
    let newNums = nums.join("").split("")

    let elementSum = 0;
    let digitSum = 0;

    for ( let i = 0; i < newNums.length; i++ ) { 
        if( nums[i] !== undefined ) { 
            elementSum += nums[i]
        }
        digitSum += +newNums[i]
    }

    return elementSum - digitSum
};

differenceOfSum([1,15,6,3])
