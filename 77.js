var combine = function(n, k) {
    var res = [];
    if(k == 0 || n == 0) return res;

    function find(arr,index){
        for (let i = index; i <= n; i++) {
            var item = [];
            for (let j = 0; j < arr.length; j++) {
                item.push(arr[j]);
            }

            if(item.indexOf(i) == -1) {
                item.push(i);
                if(item.length < k) find(item,i);
                else res.push(item);
            }
        }
    }
    find([],1);

    return res;
};