var minMovesToSeat = function(seats, students) {
    let newSeats = seats.sort( (a,b) => a - b); 
    let newStudents = students.sort( (a,b) => a - b);

    let count = 0;


    for( let i = 0; i < seats.length; i++ ) { 
        count += Math.abs( seats[i] - students[i] );
    }

    return count
};


minMovesToSeat([3,1,5], [2,7,4])
