var minPathSum = function (grid) {
    var res = 0;
    if (grid.length == 0) return res;
    var lenR = grid.length;
    var lenC = grid[0].length;

    for (let i = 0; i < lenR; i++) {
        for (let j = 0; j < lenC; j++) {
            if(i == 0 && j == 0) continue;
            var a = 99999999999999999999999999999999;
            var b = 99999999999999999999999999999999;
            if (i > 0) a = grid[i - 1][j];
            if (j > 0) b = grid[i][j - 1];
            grid[i][j] += a < b ? a : b;
        }
        
    }
    // console.log(grid)
    res = grid[lenR - 1][lenC - 1];
    return res;
};