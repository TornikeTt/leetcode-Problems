var findArray = function (pref) {
    let newArr = [];

    for (let i = 0; i < pref.length; i++) {
        newArr.push(pref[i] ^ pref[i - 1]);
    }
    newArr;
    return newArr;
};

findArray([5, 2, 0, 3, 1]);

console.log(5 ^ undefined);
console.log(5 ^ 2);
console.log(0 ^ 2);
console.log(3 ^ 0);
console.log(1 ^ 3);
