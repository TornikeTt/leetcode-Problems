var decode = function (encoded, first) {
    let newArr = [];
    let value = first;

    for (let i = 0; i < encoded.length; i++) {
        value = value ^ encoded[i];
        newArr.push(value);
    }

    newArr.unshift(first);

    return newArr;
};

decode([1, 2, 3], 1);
