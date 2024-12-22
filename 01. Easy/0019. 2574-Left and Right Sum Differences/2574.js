var leftRightDifference = function(nums) {
    let leftSum = [];
    let rightSum = [];

    let Lcount = 0;
    let Rcount = 0;

    for( let i = 0; i < nums.length; i++ ) { 
        if( nums[i - 1] === undefined ) { 
            leftSum.push(0)
        } else { 
            Lcount += nums[i - 1]
            leftSum.push(Lcount)
        }
    }


    for ( let j = nums.length; j > 0; j-- ) { 
        if( nums[j] === undefined ) { 
            rightSum.unshift(0)    
        } else { 
            Rcount += nums[j]
            rightSum.unshift(Rcount)    
        }
    }

    
    let answerArra = []

    for ( let w = 0; w < nums.length; w++ ) { 
        answerArra.push(Math.abs(leftSum[w] - rightSum[w]))
    }
    
    return answerArra
};


leftRightDifference([10,4,8,3])
