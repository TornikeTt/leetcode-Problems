class Solution {
    encode(strs) {
        if (strs.length === 0) return "";
        let sizes = [];
        let res = "";

        for (let s of strs) {
            sizes.push(s.length);
        }

        // sizes = [ 4, 4, 4, 3 ]

        for (let sz of sizes) {
            res += sz + ",";
        }

        // res = '4,4,4,3,'

        res += "#";

        // res = '4,4,4,3,#'

        for (let s of strs) {
            res += s;
        }

        // res = '4,4,4,3,#neetcodeloveyou'

        return res;
    }

    decode(str) {
        if (str.length === 0) return [];
        let sizes = [],
            res = [],
            i = 0;

        // str = '4,4,4,3,#neetcodeloveyou'

        while (str[i] !== "#") {
            let cur = "";
            while (str[i] !== ",") {
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        //sizes = [4, 4, 4, 3];

        i++;
        // i = 9

        for (let sz of sizes) {
            res.push(str.substr(i, sz));
            i += sz;
        }
        // res =  [ 'neet', 'code', 'love', 'you' ]

        return res;
    }
}

let example = new Solution();
let fordecode = example.encode(["neet", "code", "love", "you"]);
example.decode(fordecode);
