var evalRPN = function(tokens) {
    let stack = [];
    
    for ( let i = 0; i < tokens.length; i++ )  { 
        if( !isNaN(tokens[i]) )  {
            stack.push(parseInt(tokens[i]))
        } else  {
            let firstNumber = stack.pop()
            let secondNumber = stack.pop()

            switch(tokens[i]){ 
                case "+":
                    stack.push(firstNumber + secondNumber)
                    break;
                case "-":
                    stack.push(secondNumber - firstNumber)
                    break;
                case "*":
                    stack.push(firstNumber * secondNumber)
                    break;
                case "/":
                    stack.push(Math.trunc(secondNumber / firstNumber))
                    break;
            }
        }
    }

    return stack.pop()
};

evalRPN(["2","1","+","3","*"])
