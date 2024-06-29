var minTimeToVisitAllPoints = function(points) {
    
    let count = 0;
    
    for ( let i = 0; i < points.length - 1; i++ ) { 
        if( points[i][0] < points[i+1][0]) {
            let hold = points[i+1][0]
            points[i+1][0] = points[i][0]
            points[i][0] = hold
        } 

        console.log(points)
    }

    return count
};

minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]);
//minTimeToVisitAllPoints([[3,2],[-2,2]]);
