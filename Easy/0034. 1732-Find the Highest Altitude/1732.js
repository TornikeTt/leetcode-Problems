var largestAltitude = function(gain) {

    let num = 0;
    let count = gain[0];

    for ( let i = 0; i < gain.length; i++ ) { 
        num += gain[i]

        if( num >= count )  { 
            count = num
        }

    }

    return count > 0? count : 0
};

largestAltitude([-5,1,5,0,-7])
largestAltitude([-4,-3,-2,-1,4,3,2])
