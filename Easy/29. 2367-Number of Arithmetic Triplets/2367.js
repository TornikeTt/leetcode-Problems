var arithmeticTriplets = function(nums, diff) {
    let count = 0; 

    for ( let i = 0; i < nums.length; i++ ) { 
        for ( let j = 0; j < nums.length; j++ ) { 
            if( nums[i] - nums[j] === diff && secondCheck( nums[j], nums, diff )) { 
                count++
            }
        }
    }

    return count

};

function secondCheck(currentValue, arr, aim) { 
    for ( let i = 0; i < arr.length; i++ ) { 
        if (currentValue - arr[i] === aim) { 
            return true
        } 
    } 
    return false
}

arithmeticTriplets( [0,1,4,6,7,10] , 3 );
