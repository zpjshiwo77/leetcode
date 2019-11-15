var threeSum = function(nums) {
    var res = [];
    var len = nums.length
    var used = {};
    
    if(!Array.isArray(nums) || nums.length < 3) return res;
    
    nums.sort((a,b)=>{return a-b;});

    if(nums[0] > 0 || nums[len - 1] < 0) return res;

    for (var i = 0; i < len - 2; i++) {
        var left = i + 1;
        var right = len - 1;
        var a = nums[i];
        var usedB = {};

        if(a > 0) break;

        if(!used.hasOwnProperty(a)){
            used[a] = true;
            while(true){
                var b = nums[left];
                var c = nums[right];
                var count = a + b + c;

                // console.log(left,right)
                
                if(left >= right || c < 0) break;

                if(usedB.hasOwnProperty(b)) {
                    left++;
                    continue;
                }
                if(usedB.hasOwnProperty(c)) {
                    right--;
                    continue;
                }

                if(count == 0) {
                    res.push([a,b,c]);
                    right--;
                    left++;
                    usedB[b] = true;
                    usedB[c] = true;
                }
                else if(count < 0) left++;
                else if(count > 0) right--;
    
                if(left < 0 || right > len - 1) break;
            }
        }
        usedB = {};
    }

    // console.log(res);
    return res;
};