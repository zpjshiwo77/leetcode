var permuteUnique = function (nums) {
    var res = [];
    var len = nums.length;

    function findRes(val, index, arr) {
        var used = {};
        for (var i = 0; i < len; i++) {
            if(used.hasOwnProperty(nums[i])) continue;
            if (index.indexOf(i) == -1) {
                var item = [];
                var item2 = [];
                for (var j = 0; j < arr.length; j++) {
                    item.push(arr[j]);
                }
                for (var k = 0; k < index.length; k++) {
                    item2.push(index[k]);
                }
                item.push(nums[i]);
                item2.push(i);
                used[nums[i]] = true;
                if (item.length < len) findRes(nums[i], item2, item);
                else res.push(item);
            }
        }
    }
    findRes(null, [], []);

    return res;
};