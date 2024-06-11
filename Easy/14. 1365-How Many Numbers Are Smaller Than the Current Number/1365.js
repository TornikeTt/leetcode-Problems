var smallerNumbersThanCurrent = function(nums) {
    let newArr = [];

    for ( let i = 0;  i < nums.length; i++ ) { 
        let count = 0;

        for( let j = 0; j < nums.length; j++ ) { 
            if( nums[i] > nums[j]) { 
                count++
            }
        }
        
        newArr.push(count)
    }


    return newArr
};

smallerNumbersThanCurrent([8,1,2,2,3]);


// Time Complexity: O(n^2)
