var generateParenthesis = function(n) {
    var res = [];
    var len = n;

    function makeBrackets(str,left,right){
        if(str.length == len * 2){
            res.push(str);
            return;
        }

        if(left < len) {
            makeBrackets(str+"(",left+1,right);
        }

        if(right < left){
            makeBrackets(str+")",left,right+1);
        }
    }
    makeBrackets("",0,0);

    return res;
};