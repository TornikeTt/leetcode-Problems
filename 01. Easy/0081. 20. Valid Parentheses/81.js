function isValid(s) {
  const stack = [];
  const closeToOpen = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (closeToOpen[char]) {
      if (stack.length && stack[stack.length - 1] === closeToOpen[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

isValid("()[]{}")
isValid("([])")
