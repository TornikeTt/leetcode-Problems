var findArray = function (pref) {
    let newArr = [];

    for (let i = 0; i < pref.length; i++) {
        newArr.push(pref[i] ^ pref[i - 1]);
    }
    return newArr;
};

findArray([5, 2, 0, 3, 1]);
