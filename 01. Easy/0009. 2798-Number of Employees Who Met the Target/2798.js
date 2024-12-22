var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;

    for( let h of hours ) { 
        if(h  >= target){ 
            count++
        }
    }
    return count
};


numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2)
