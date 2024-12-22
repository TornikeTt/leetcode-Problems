var numIdenticalPairs = function(nums) {
    let count = 0;

    for ( let i = 0 ; i < nums.length; i++ ) { 
        for ( let j = 0 ; j < nums.length; j++) { 
            if( nums[i] === nums[j] && i < j ) { 
                ++count
            }
        }
    }
    return count
};

numIdenticalPairs([1,2,3,1,1,3]);
numIdenticalPairs([1,1,1,1]);
numIdenticalPairs([1,2,3]);
