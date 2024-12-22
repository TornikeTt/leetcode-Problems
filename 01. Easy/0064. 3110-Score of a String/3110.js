var scoreOfString = function (s) {
    let sum = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let val = s.charCodeAt(i) - s.charCodeAt(i + 1);
        sum += Math.abs(val);
    }

    return sum;
};

console.log(scoreOfString("hello"));
