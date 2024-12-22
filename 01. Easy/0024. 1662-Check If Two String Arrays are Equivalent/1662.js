var arrayStringsAreEqual = function(word1, word2) {
    let customLength = Math.max(word1.length, word2.length)

    let  stringWord1 = ""
    let  stringWord2 = ""
     
    for( let i = 0; i < customLength; i++ ) { 
        if( word1[i] !== undefined ) { 
            stringWord1 += word1[i]
        }
        if( word2[i] !== undefined ) { 
            stringWord2 += word2[i]
        }
    }


    if( stringWord1 === stringWord2 ) { 
        return true
    } else { 
        return false
    }

};

arrayStringsAreEqual(["abc", "d", "defg"]  , ["abcddefg"])
