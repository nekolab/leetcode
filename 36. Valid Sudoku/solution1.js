/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var checkArea = function(col, row, board) {
        var array = [], content;
        for (var colcur = col * 3; colcur < (col * 3 + 3); ++colcur) {
            for (var rowcur = row * 3; rowcur < (row * 3 + 3); ++ rowcur) {
                content = board[rowcur][colcur];
                if (content !== '.') {
                    if (array[content|0]) { return false; }
                    array[content|0] = true;
                }
            }
        }
        return true;
    };

    var checkCol = function(col, board) {
        var array = [], content;
        for (var rowcur = 0; rowcur < 9; ++rowcur) {
            content = board[rowcur][col];
            if (content !== '.') {
                if (array[content|0]) { return false; }
                array[content|0] = true;
            }
        }
        return true;
    };

    var checkRow = function(row, board) {
        var array = [], content;
        for (var colcur = 0; colcur < 9; ++colcur) {
            content = board[row][colcur];
            if (content !== '.') {
                if (array[content|0]) { return false; }
                array[content|0] = true;
            }
        }
        return true;
    };

    var i, j;
    for (i = 0; i < 9; ++i) {
        if (!(checkCol(i, board) && checkRow(i, board))) { return false; }
    }

    for (i = 0; i < 3; ++i) {
        for (j = 0; j < 3; ++j) {
            if (!checkArea(i, j, board)) { return false; }
        }
    }

    return true;
};