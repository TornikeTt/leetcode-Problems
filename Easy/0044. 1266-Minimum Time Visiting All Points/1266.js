var minTimeToVisitAllPoints = function(points) {
    let count = 0;
    
    for ( let i = 0; i < points.length - 1; i++ ) { 
        let first = points[i][0] - points[i+1][0];
        let second = points[i][1] - points[i+1][1];
        
        let newFirst = Math.abs(first)
        let newSecond = Math.abs(second)

        if( newFirst > newSecond ){ 
            count+=newFirst
        } else { 
            count+=newSecond
        }
    }

    return count
};

minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]);
minTimeToVisitAllPoints([[3,2],[-2,2]]);
