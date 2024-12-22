var specialArray = function(nums) {

    let newArray = nums.sort((a,b) => a - b);


    for ( let x = 0; x <=  newArray.length; x++ ) { 
        let count = 0;

        for ( let i = 0; i < newArray.length; i++ ) { 
            if( newArray[i] >= x ) { 
                count++
            }
        }

        if( count === x ) { 
            return x 
        } 
    }

    return -1
};



let result1 = specialArray([3, 5]); // Should output 2
console.log(result1);

let result2 = specialArray([0, 0]); // Should output -1
console.log(result2);

let result3 = specialArray([0, 4, 3, 0, 4]); // Should output 3
console.log(result3);
