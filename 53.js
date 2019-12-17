var maxSubArray = function(nums) {
    var res = nums[0];
    var total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        if(total > res) res = total;
        if(total < 0) total = 0;
    }

    return res;
};