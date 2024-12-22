var maximizeSum = function(nums, k) {
    let maxNum = Math.max(...nums);
    let count = 0;
    for ( let i = 0; i < k; i++ )  { 
        count = count + maxNum + i
    }
    return count
};


maximizeSum([1,2,3,4,5] , 3)
maximizeSum([5,5,5] , 2)
