var romanToInt = function(s) {
    var keyList = {"M":1000,"CM":800,"D":500,"CD":300,"C":100,"XC":80,"L":50,"XL":30,"X":10,"IX":8,"V":5,"IV":3,"I":1};
    var res = 0;
    var sArr = s.split("");
    var index = 0;

    while(index < sArr.length){
        var item = sArr[index];
        var item2 = index+1 >= sArr.length ? false : sArr[index] + sArr[index+1];
        if(keyList.hasOwnProperty(item)){
            res += keyList[item];
            index++;
            if(item2 && keyList.hasOwnProperty(item2)){
                res += keyList[item2];
                index++;
            }
        }
    }
    
    // console.log(res);
    return res;
};