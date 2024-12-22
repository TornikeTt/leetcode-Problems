var isValidSudoku = function (board) {
    let row = new Array(board.length);
    let column = new Array(board.length);
    let squares = new Array(board.length);

    for (let i = 0; i < board.length; i++) {
        row[i] = {};
        column[i] = {};
        squares[i] = {};
    }

    // Populate row, column, and square objects
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === ".") continue;
            let num = board[i][j];

            // Update rows
            row[i][num] = (row[i][num] || 0) + 1;

            // Update columns
            column[j][num] = (column[j][num] || 0) + 1;

            // Update squares
            let squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            squares[squareIndex][num] = (squares[squareIndex][num] || 0) + 1;

            // Check for duplicates
            if (
                row[i][num] > 1 ||
                column[j][num] > 1 ||
                squares[squareIndex][num] > 1
            ) {
                return false;
            }
        }
    }

    return true;
};

isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
