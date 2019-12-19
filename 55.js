var canJump = function(nums) {
    var total = 0;

    for (let i = 0; i < nums.length; i++) {
        if(total < i) return false;
        // console.log(total)
        if(total >= nums.length) return true;
        total = total > nums[i] + i ? total : nums[i] + i;
    }

    return true;
};