/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var num = 0;
    
    var sArr = s.split("");
    var str = "";
    var index = 0;
    var len = sArr.length;
    
    function findStr(start){
        var strb = "";
        for(var i = start; i < len; i++){
            var item = sArr[i];
            if(strb.indexOf(item) == -1){
                strb += sArr[i];
                if(strb.length > str.length) str = strb;
            }
            else{
                if(i == len) return;
                else {
                    index = sArr.indexOf(item) > index ? sArr.indexOf(item) : index + 1;
                    findStr(index);
                    break;
                }
            }
        }
    }
    findStr(index);
    
    num = str.length;
    
    return num;
};