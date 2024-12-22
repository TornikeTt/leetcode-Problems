var isPalindrome = function (str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        while (left < right && !alphaNum(str[left])) {
            left++;
        }

        while (right > left && !alphaNum(str[right])) {
            right--;
        }

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    function alphaNum(c) {
        // This function checks if a character c is an alphanumeric character.
        return (
            (c >= "A" && c <= "Z") ||
            (c >= "a" && c <= "z") ||
            (c >= "0" && c <= "9")
        );
    }

    return true;
};

isPalindrome("A man, a plan, a canal: Panama");
