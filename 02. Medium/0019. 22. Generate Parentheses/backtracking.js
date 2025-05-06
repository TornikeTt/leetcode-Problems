function generateParenthesis(n) {
    const result = [];

    const backtrack = (openCount, closeCount, current) => {
        // Base case: if the current string is complete
        if (openCount === n && closeCount === n) {
            result.push(current);
            return;
        }

        // Add an opening parenthesis if we still have some left to use
        if (openCount < n) {
            backtrack(openCount + 1, closeCount, current + '(');
        }

        // Add a closing parenthesis if it would not exceed the number of open ones
        if (closeCount < openCount) {
            backtrack(openCount, closeCount + 1, current + ')');
        }
    };

    // Start the recursion with 0 open and close parentheses used
    backtrack(0, 0, '');

    return result;
}

console.log(generateParenthesis(2));
