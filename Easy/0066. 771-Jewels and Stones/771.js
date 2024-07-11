var numJewelsInStones = function (jewels, stones) {
    let re = new RegExp(`[${jewels}]`, "gm");
    let sum = stones.match(re);
    return sum === null ? 0 : sum.length;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
