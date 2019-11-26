var jump = function(nums) {
    var steps = nums.length == 1 ? [] : [nums[0]];

    function findStep(index){
        var now = nums[index];
        var len = index + now;
        var stepmax = 0;
        var nowindex = index;
        if(len >= nums.length - 1) return;
        
        for (var i = index + 1; i <= len; i++) {
            // console.log(nums[i], i,stepmax)
            if(nums[i] + i > stepmax){
                stepmax = nums[i] + i;
                nowindex = i;
            }
        }
        // if(nums[nowindex] == 0) {
        //     console.log(nowindex);
        //     return;
        // }
        steps.push(nums[nowindex]);
        findStep(nowindex);
    }
    findStep(0);

    // console.log(steps);
    return steps.length;
};