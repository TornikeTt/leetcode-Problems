var SubrectangleQueries = function (rectangle) {
    this.arr = [...rectangle];
};

SubrectangleQueries.prototype.updateSubrectangle = function (
    row1,
    col1,
    row2,
    col2,
    newValue
) {
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            this.arr[i][j] = newValue;
        }
    }
};

SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.arr[row][col];
};

var obj = new SubrectangleQueries([
    [1, 2, 1],
    [4, 3, 4],
    [3, 2, 1],
    [1, 1, 1],
]);

obj.updateSubrectangle(3, 0, 3, 2, 10);
var param_2 = obj.getValue(0, 2);
