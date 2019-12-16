var rotate = function(matrix) {
    var len = matrix.length;
    var len2 = matrix[0].length;

    for (let i = 0; i < len; i++) {        
        for (let j = 0; j < len2 - i; j++) {
            var item = matrix[i][j];
            matrix[i][j] = matrix[len - j - 1][len - i - 1];
            matrix[len - j - 1][len - i - 1] = item;
        }
    }
    
    for (let i = 0; i < len / 2; i++) {
        for (let j = 0; j < len2; j++) {
            var item = matrix[i][j];
            matrix[i][j] = matrix[len - i - 1][j];
            matrix[len - i - 1][j] = item;
        }        
    }

    return matrix;
};