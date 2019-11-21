var letterCombinations = function (digits) {
    var sArr = (digits+'').split("");
    var res = [];
    var nums = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    if(!digits) return res;

    function findLetter(letter,index) {
        if (index < sArr.length) {
            var num = sArr[index];
            var letters = nums[num];

            for (var i = 0; i < letters.length; i++) {
                findLetter(letter + letters[i],index + 1);
            }
        }
        else res.push(letter);
    }
    findLetter('',0);

    // console.log(res);
    return res;
};