var isValidSudoku = function(board) {
    for (var i = 0; i < 9; i++) {
        var rowArr = [];
        var colArr = [];
        var blockArr = [];
        for (var j = 0; j < 9; j++) {
            var itemRow = board[i][j];
            var itemCol = board[j][i];
            var itemBlock = board[parseInt(j/3) + 3*parseInt(i/3)][j % 3 + 3 * (i % 3)];

            if(itemRow != ".") {
                if(rowArr.indexOf(itemRow) == -1) rowArr.push(itemRow);
                else return false;
            }
            if(itemCol != ".") {
                if(colArr.indexOf(itemCol) == -1) colArr.push(itemCol);
                else return false;
            }
            if(itemBlock != ".") {
                if(blockArr.indexOf(itemBlock) == -1) blockArr.push(itemBlock);
                else return false;
            }
        }
        rowArr = [];
        colArr = [];
        blockArr = [];
    }

    return true;
};