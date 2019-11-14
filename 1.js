/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var index = [];
    
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                index[0] = i;
                index[1] = j;
                break;
            }
        }
    }
    
    return index;
};