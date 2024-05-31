var kidsWithCandies = function(candies, extraCandies) {
    
    // Find the maximum number in the array.

    let maxNumber = 0;

    for ( let i = 0; i < candies.length; i++ ) { 
        if( maxNumber < candies[i] ) { 
            maxNumber = candies[i];
        }
    }

    // Find kids with the Greatest Number of Candies 
    
    let newArray = [] 

    for( let j = 0; j < candies.length; j++ ) { 
        if(candies[j] + extraCandies >= maxNumber) { 
            newArray.push(true) 
        } else { 
            newArray.push(false) 
        }
    } 


    return newArray

};


kidsWithCandies([2,3,5,1,3] , 3);
