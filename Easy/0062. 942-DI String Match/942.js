var diStringMatch = function (s) {
    let result = [];
    let min = 0;
    let max = s.length;

    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "I") {
            result.push(min);
            min++;
        } else {
            result.push(max);
            max--;
        }
    }

    return result;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
