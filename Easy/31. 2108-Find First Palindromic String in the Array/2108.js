var firstPalindrome = function(words) {
    let newWord = [];
    let text = "";

    for ( let i = 0; i < words.length; i++ ) { 
        text = "" 
        
        for ( let j = words[i].length - 1; j >= 0; j-- ) { 
            text += words[i][j]
        }

        newWord.push(text)
    }


    return checking(newWord , words);
};


function checking( newWord, oldWords ) { 
    for ( let i = 0; i < newWord.length; i++ ) { 
        if( newWord[i] === oldWords[i] ) { 
            return newWord[i]
        }
    }
    return ""
}

let s = firstPalindrome(["abc","car","ada","racecar","cool"]);

console.log(s)
