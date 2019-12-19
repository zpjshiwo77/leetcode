var uniquePathsWithObstacles = function (obstacleGrid) {
    var res = 0;
    if (obstacleGrid.length == 0) return res;
    if (obstacleGrid[0][0] == 1) return res;
    var lenR = obstacleGrid.length;
    var lenC = obstacleGrid[0].length;

    for (let i = 0; i < lenR; i++) {
        for (let j = 0; j < lenC; j++) {
            if (i == 0 && j == 0) {
                obstacleGrid[i][j] = 1;
                continue;
            }
            if(obstacleGrid[i][j] != 1){
                if (i > 0) obstacleGrid[i][j] += obstacleGrid[i - 1][j];
                if (j > 0) obstacleGrid[i][j] += obstacleGrid[i][j - 1];
            }
            else if(obstacleGrid[i][j] == 1) obstacleGrid[i][j] = 0;
        }
    }
    res = obstacleGrid[lenR - 1][lenC - 1];
    return res;
};