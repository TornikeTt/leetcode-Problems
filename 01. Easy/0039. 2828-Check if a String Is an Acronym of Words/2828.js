var isAcronym = function(words, s) {
    let count = 0;

    if (words.length !== s.length )  {
        return false
    } else { 
        for ( let i = 0 ; i < s.length; i++ ) { 
            if(s[i] === words[i][0]) { 
                count++
            }       
        }
    }

    return count === s.length? true : false
};

isAcronym( ["dvn","acafe"], "dp")

// Big O(n)
