var merge = function(intervals) {
    var res = [];

    if(intervals.length == 0) return res;

    intervals.sort(function(a,b){
        return a[0] - b[0];
    });
    // console.log(intervals)

    function find(arr,index){
        var next = index + 1;
        var start = arr[index][0];
        var end = arr[index][1];
        for (let i = index + 1; i < arr.length; i++) {
            if(arr[i][0] <= end && arr[i][1] >= start){
                next = i + 1;
                if(arr[i][1] > end) end = arr[i][1];
                if(arr[i][0] < start) start = arr[i][0];
            }
            else{
                next = i;
                break;
            }
        }
        // console.log(next);
        res.push([start,end]);
        if(next < arr.length) find(arr,next);
    }
    find(intervals,0);

    return res;
};