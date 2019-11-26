var combinationSum = function (candidates, target) {
    var res = [];
    var arr = candidates.sort(function (a, b) { return a - b });
    var len = arr.length;

    function findTargetArr(onceRes,index) {
        for (var i = index; i < len; i++) {
            if (onceRes.total + arr[i] > target) return;
            else if (onceRes.total + arr[i] == target) {
                onceRes.arr.push(arr[i]);
                res.push(onceRes.arr);
                return;
            }
            else if (onceRes.total + arr[i] < target) {
                var item = {arr:[],total:0};
                for (var j = 0; j < onceRes.arr.length; j++) {
                    item.arr.push(onceRes.arr[j]);
                }
                item.total = onceRes.total;
                item.arr.push(arr[i]);
                item.total += arr[i];
                findTargetArr(item,i);
            }
        }
    }
    findTargetArr({ arr: [], total: 0 }, 0);

    return res;
};