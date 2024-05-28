var shuffle = function(nums, n) {
    let newArray = [];

    for(let i = 0; i < n; i++ ) { 
        newArray.push(nums[i], nums[i+n])
    }

    return newArray
};



console.log(shuffle ( [2,5,1,3,4,7] , 3) ); 
// [2,3,5,4,1,7]

