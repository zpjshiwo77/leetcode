var exist = function(board, word) {
    let res = false;
    let words = word.split("");
    
    for (let i = 0; i < board.length; i++) {
        let eles = board[i];
        for (let j = 0; j < eles.length; j++) {
            let ele = eles[j];
            if(ele == words[0]) {
                if(words.length == 1) res = true;
                else res = find(board,1,i,j);
                if(res) return res;
            }
        }
    }

    function find(board,index,i,j){
        if(index == words.length) return true;

        let res = false;
        let resa = false,resb = false,resc = false,resd = false;
        board[i][j] = board[i][j] + "x";

        if(i - 1 >= 0 && board[i - 1][j] == words[index]){
            resa = find(board,index + 1,i - 1,j);
        }

        if(i + 1 < board.length && board[i + 1][j] == words[index]){
            resb = find(board,index + 1,i + 1,j);
        }

        if(j - 1 >= 0 && board[i][j - 1] == words[index]){
            resc = find(board,index + 1,i,j - 1);
        }

        if(j + 1 < board[0].length && board[i][j + 1] == words[index]){
            resd = find(board,index + 1,i,j + 1);
        }

        res = resa || resb || resc || resd;
        // console.log(index,res,resa,resb,resc,resd)
        // console.log(board)
        // console.log(index,i,j)

        return res;
    }

    return res;
};


var exist = function(board, word) {
    let res = false;
    let words = word.split("");
    
    for (let i = 0; i < board.length; i++) {
        let eles = board[i];
        for (let j = 0; j < eles.length; j++) {
            let ele = eles[j];
            if(ele == words[0]) {
                if(words.length == 1) res = true;
                else {
                    let arr = copyArr(board);
                    res = find(arr,1,i,j);
                }
                if(res) return res;
            }
        }
    }

    function find(board,index,i,j){
        if(index == words.length) return true;

        let res = false;
        let resa = false,resb = false,resc = false,resd = false;
        board[i][j] = board[i][j] + "x";

        if(i - 1 >= 0 && board[i - 1][j] == words[index]){
            let arr = copyArr(board);
            resa = find(arr,index + 1,i - 1,j);
        }

        if(i + 1 < board.length && board[i + 1][j] == words[index]){
            let arr = copyArr(board);
            resb = find(arr,index + 1,i + 1,j);
        }

        if(j - 1 >= 0 && board[i][j - 1] == words[index]){
            let arr = copyArr(board);
            resc = find(arr,index + 1,i,j - 1);
        }

        if(j + 1 < board[0].length && board[i][j + 1] == words[index]){
            let arr = copyArr(board);
            resd = find(arr,index + 1,i,j + 1);
        }

        res = resa || resb || resc || resd;
        // console.log(index,res,resa,resb,resc,resd)
        console.log(board)
        console.log(index,i,j)

        return res;
    }

    /**
     * 深度拷贝数组
     */
    function copyArr(arr){
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push([...arr[i]]);          
        }
        return res;
    }

    return res;
};

