var countKDifference = function(nums, k) {
    let count = 0;


    for ( let i = 0; i < nums.length; i++ )  { 
        for ( let j = 0; j < nums.length; j++ ) { 
            if( nums[i] - nums[j] === k) { 
                count++
            }
        }
    }
    
    return count
};

countKDifference([1,2,2,1], 1)
