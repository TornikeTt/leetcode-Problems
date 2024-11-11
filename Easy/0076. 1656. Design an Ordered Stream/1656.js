var OrderedStream = function (n) {
    this.pointer = 0;
    this.list = new Array(n);
};

OrderedStream.prototype.insert = function (idKey, value) {
    let outerArr = [];
    this.list[idKey - 1] = value;

    while (this.list[this.pointer]) {
        outerArr.push(this.list[this.pointer]);
        this.pointer++;
    }

    return outerArr;
};

const os = new OrderedStream(5);

console.log(os.insert(3, "ccccc")); // Output: []
console.log(os.insert(1, "aaaaa")); // Output: ["aaaaa"]
console.log(os.insert(2, "bbbbb")); // Output: ["bbbbb", "ccccc"]
console.log(os.insert(5, "eeeee")); // Output: []
console.log(os.insert(4, "ddddd")); // Output: ["ddddd", "eeeee"]

console.log(os.list);
