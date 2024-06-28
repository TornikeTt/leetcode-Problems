var sumIndicesWithKSetBits = function(nums, k) {
    
    let countAnswer = 0; 

    for ( let i = 0 ; i < nums.length; i++ )  { 

        let count = 0; 
        let binary = i.toString(2).split("")


        for ( let j = 0; j < binary.length; j++ ) { 
            if( binary[j] == 1 ) { 
                count++  
            }
        }

        if( count == k) { 
            countAnswer += nums[i]
        }

    }


    return countAnswer 


};

sumIndicesWithKSetBits([4,3,2,1] , 2)
