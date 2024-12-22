function fibonacci(n) { 

    if( n < 2 ) { 
        return n
    } else { 
        let fib = [ 0, 1];

        for( let i = 2; i < n; i++ ) { 
            fib[i] = fib[i - 1] + fib[i - 2]
        }

        return fib[n-1] + fib[n-2];
    }
    
}


fibonacci(4)