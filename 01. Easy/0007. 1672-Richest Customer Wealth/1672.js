var maximumWealth = function (accounts) {
    let arr = [];

    for (let i = 0; i < accounts.length; i++) {
        let num = 0;
        for (let j = 0; j < accounts[0].length; j++) {
            num = num + accounts[i][j];
        }
        arr.push(num);
    }

    return Math.max(...arr);
};

let test = maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
]);

console.log(test);
