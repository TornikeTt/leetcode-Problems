var duplicateNumbersXOR = function(nums) {

    let xorOfNumber = 0;

    for ( let i = 0; i < nums.length; i++ ) { 
        for ( let j = i+1; j < nums.length; j++ ) { 
            if( nums[i] === nums[j]){ 
                xorOfNumber = nums[i] ^ xorOfNumber
            }
        }
    }

    return xorOfNumber
};

duplicateNumbersXOR([1,2,1,3])
duplicateNumbersXOR([1,2,2,1])
