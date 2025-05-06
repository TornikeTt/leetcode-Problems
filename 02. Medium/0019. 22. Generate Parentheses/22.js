function generateParenthesis(n) {
    const result = [];
    generateAllCombinations("", result, n);
    return result;
}

function generateAllCombinations(current, result, maxPairs) {
    // Base case: if the current string has 2n characters
    if (current.length === 2 * maxPairs) {
        if (isValidParenthesis(current)) {
            result.push(current);
        }
        return;
    }

    // Add an opening parenthesis and recurse
    generateAllCombinations(current + "(", result, maxPairs);

    // Add a closing parenthesis and recurse
    generateAllCombinations(current + ")", result, maxPairs);
}

// Function to check if a parenthesis string is valid
function isValidParenthesis(string) {
    let balance = 0;

    for (const char of string) {
        if (char === "(") {
            balance++;
        } else {
            balance--;
        }

        // If at any point we have more ')' than '(', it's invalid
        if (balance < 0) return false;
    }

    // Valid if open and close parentheses are balanced
    return balance === 0;
}

// Example usage
console.log(generateParenthesis(2));
