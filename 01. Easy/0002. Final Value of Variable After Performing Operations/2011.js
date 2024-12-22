var finalValueAfterOperations = function(operations) {
    let num = 0;

    for( let i = 0; i < operations.length; i++ ) { 
        if(operations[i].includes("++")){ 
            ++num
        } else { 
            --num
        }
    }

    return num
};


finalValueAfterOperations( ["--X","X++","X++"] ) 
finalValueAfterOperations( ["++X","++X","X++"] ) 
finalValueAfterOperations( ["X++","++X","--X","X--"] ) 


