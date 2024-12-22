var minPartitions = function(n) {
    let divide = n.toString().split("")
    let result = 0

    for ( let i = 0; i < divide.length; i++) { 
      let curr = Number(divide[i])
      if(result < curr) { 
        result = curr
      }
    }
    
    return result
};
