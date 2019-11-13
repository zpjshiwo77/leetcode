var maxArea = function(height) {
    var res = 0;
    var start = 0;
    var end = height.length - 1;

    while(end > start){
        var line = height[end] > height[start] ? height[start] : height[end];
        var area = line * (end - start);
        res = area > res ? area : res;
        height[end] > height[start] ? start++ : end--;
    }
    console.log(res)
    return res;
};