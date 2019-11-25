var countAndSay = function(n) {
    var count = 1;
    var res = n == 1 ? "1" : "";

    function x (str){
        var arr = str.split("");
        str = "";
        var item = arr[0];
        var index = 1;

        for (var i = 1; i < arr.length + 1; i++) {
            if(i >= arr.length || item != arr[i]){
                str += index + item;
                if(i < arr.length) item = arr[i];
                index = 1;
            }
            else if(item == arr[i]) index++;
        }
        
        count++;
        if(count >= n) res = str;
        else x(str);
    }
    if(n > 1) x("1");

    return res;
};