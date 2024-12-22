var countPairs = function(nums, target) {
    let count = 0;
    for ( let i = 0; i < nums.length; i++ ) { 
        for ( let j = 1; j < nums.length; j++ )  { 
            if( nums[i] + nums[j] < target && i < j) { 
                count++
            } 
        }
    }
    return count
};


let test = countPairs([-1,1,2,3,1] , 2);
let test2 = countPairs([-6,2,5,-2,-7,-1,3], -2);

// Time Complexity: O(n^2)
