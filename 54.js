var spiralOrder = function (matrix) {
    var res = [];

    if (matrix[0]) {
        var lenR = matrix[0].length;
        var lenC = matrix.length;

        function find(index) {
            for (let i = index; i < lenR - index; i++) {
                res.push(matrix[index][i]);
            }
            // console.log(res)
            for (let i = index + 1; i < lenC - index; i++) {
                res.push(matrix[i][lenR - index - 1]);
            }
            // console.log(res)
            if (lenC - index - 1 != index) {
                for (let i = lenR - index - 2; i >= index; i--) {
                    res.push(matrix[lenC - index - 1][i]);
                }
                // console.log(res)
            }
            if(index != lenR - index - 1){
                for (let i = lenC - index - 2; i >= index + 1; i--) {
                    res.push(matrix[i][index]);
                }
            }
            // console.log(res)
            if (res.length < lenR * lenC) find(index + 1);
        }
        find(0);
    }

    return res;
};