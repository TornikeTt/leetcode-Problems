var restoreString = function(s, indices) {

    let StringArr = []

    for ( let i = 0; i < indices.length; i++ ) { 
        StringArr[indices[i]] = s[i]
    }

    return StringArr.join("")
};


restoreString("codeleet" , [4,5,6,7,0,2,1,3]);
