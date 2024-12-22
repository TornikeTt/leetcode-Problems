var groupAnagrams = function (strs) {
    const res = {};

    for (let each of strs) {
        const count = new Array(26).fill(0);

        for (let word of each) {
            count[word.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }

        const key = count.join(",");

        if (!res[key]) {
            res[key] = [];
        }

        res[key].push(each);
    }

    return Object.values(res);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
