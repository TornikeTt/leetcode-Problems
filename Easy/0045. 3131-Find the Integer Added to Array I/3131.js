var addedInteger = function(nums1, nums2) {
    let newNums1 = sorting(nums1);
    let newNums2 = sorting(nums2);    
    return newNums2[0] - newNums1[0]
};


function sorting(arr) { 
    for ( let i = 0; i < arr.length; i++ ) { 
        let val = arr[i];
        let j = i - 1
        while( j >= 0 && arr[j] > val) { 
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = val
    }

    return arr
}



addedInteger([2,6,4], [9,7,5])
