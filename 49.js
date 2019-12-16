var groupAnagrams = function(strs) {
    var res = [];
    var obj = {};

    for (var i = 0; i < strs.length; i++) {
        var key = makeKey(strs[i]);
        if(!obj[key]) obj[key] = [];
        obj[key].push(strs[i]);
    }

    var index = 0;
    for (let key in obj) {
        res[index] = obj[key];
        index++;
    }

    function makeKey(str){
        var key = "a0b0c0d0e0f0g0h0i0j0k0l0m0n0o0p0q0r0s0t0u0v0w0x0y0z0";
        var arr = str.split("");
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i];
            let item = key.split(letter);
            key = item[0] + letter + parseInt(item[1]) + item[1];
        }
        return key;
    }

    // console.log(obj)

    return res;
};