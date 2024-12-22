var differenceOfSums = function (n, m) {
    let divisible = 0;
    let not_divisible = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            divisible += i;
        } else {
            not_divisible += i;
        }
    }

    return not_divisible - divisible;
};

console.log(differenceOfSums(10, 3));
