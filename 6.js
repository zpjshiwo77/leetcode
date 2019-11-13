var convert = function (s, numRows) {
    var row = [];
    var sArr = s.split("");
    var res = "";

    if(numRows == 1) return s;

    var rowIndex = 0;
    var index = 0;
    var num = numRows;
    (function(){
        for (var i = 0; i < sArr.length; i += num) {
            var item = rowIndex % (numRows - 1);
            for (var j = 0; j < numRows; j++) {
                if (!Array.isArray(row[j])) row[j] = [];
                if (sArr[index] && (item == 0 || j == numRows - 1 - item)) {
                    row[j][rowIndex] = sArr[index];
                    index++;
                    if(index >= sArr.length) return;
                }
                else row[j][rowIndex] = "";
            }
            rowIndex++;
            num = rowIndex % (numRows - 1) == 0 ? numRows : 1;
        }
    }());

    for (var i = 0; i < row.length; i++) {
        for (var j = 0; j < row[i].length; j++) {
            if(row[i][j]) res += row[i][j];
        }
    }
    
    console.log(row);
    console.log(res);

    return res;
};