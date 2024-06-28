var maxWidthOfVerticalArea = function(points) {
    let sorted = points.sort( (a , b) => a[0] - b[0]);

    let newArray = [];

    for( let i = 1; i < sorted.length ; i++ ) { 
        newArray.push(sorted[i][0] - sorted[i-1][0])
    }

    return Math.max(...newArray);
};

maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])
