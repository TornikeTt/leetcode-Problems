var decompressRLElist = function(nums) {

    let newArray = []

    for ( let i = 1; i < nums.length; i += 2 ) { 
        let count = 0;

        while(nums[i-1] > count) { 
            count++
            newArray.push(nums[i])
        }

    }

    console.log(newArray)
    return newArray

};

decompressRLElist([1,2,3,4])
