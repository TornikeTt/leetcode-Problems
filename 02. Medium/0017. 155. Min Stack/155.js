var MinStack = function() {
    this.stack = [];
    this.front = 0;
    this.minNumber = 0;
    this.min = [];
};

MinStack.prototype.push = function(val) {

    if(this.front === 0) { 
        this.minNumber = val
    }

    this.stack[this.front]  = val;

    this.minNumber = this.minNumber < val? this.minNumber : val;
    this.min[this.front] = this.minNumber;

    this.front++
};

MinStack.prototype.pop = function() {
    if(this.front == 0) { 
        console.log("There are no data to delete")
    } else { 
        this.stack.splice(this.front - 1, 1)
        this.min.splice(this.front - 1 , 1)
        this.front--

        this.minNumber = this.front > 0 ? this.min[this.front - 1] : 0;
    }

    console.log(this.min)
};

MinStack.prototype.top = function() {
    return this.stack[this.front - 1];
};

MinStack.prototype.getMin = function() {
    return this.min[this.front - 1]
};

