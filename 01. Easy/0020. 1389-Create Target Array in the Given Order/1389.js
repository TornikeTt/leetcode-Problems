var createTargetArray = function(nums, index) {
    const target = [];

    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }

    console.log(target);
    return target;  
};

createTargetArray([4,2,1,1], [0,0,2,0])
