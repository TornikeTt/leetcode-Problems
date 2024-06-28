var diagonalSum = function(mat) {
    let count = 0;

    let columMiddle = Math.floor( mat.length / 2)
    let rowMiddle = Math.floor( mat[columMiddle].length / 2)

    for ( let i = 0; i < mat.length; i++ ) { 
        count += mat[i][i]
        count += mat[i][mat.length - 1 - i];

    }


    if( mat.length % 2 !== 0 ) { 
        return count - mat[columMiddle][rowMiddle]
    } else { 
        return count 
    }
};

diagonalSum(
    [ 
        [1,2,3, 3],
        [4,5,6, 4],
        [7,8,9, 3],
    ]
);

/*diagonalSum( 
    [
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
    ] 
)
*/
