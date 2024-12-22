var subsetXORSum = function (arr) {
    let allSubsets = helper(arr);
    let xorSum = 0;

    for (let i = 0; i < allSubsets.length; i++) {
        if (allSubsets[i].length < 2) {
            xorSum += +allSubsets[i];
        } else {
            let currentSum = 0;
            for (let j = 0; j < allSubsets[i].length; j++) {
                currentSum ^= allSubsets[i][j];
            }
            xorSum += currentSum;
        }
    }

    return xorSum;
};

function helper(arr) {
    const n = arr.length;
    const subsets = [];

    for (let i = 0; i < Math.pow(2, n); i++) {
        const toBin = i.toString(2).padStart(n, "0");

        const subset = [];

        for (let j = 0; j < n; j++) {
            if (toBin[j] === "1") {
                subset.push(arr[j]);
            }
        }

        subsets.push(subset);
    }

    return subsets;
}

console.log(subsetXORSum([1, 3]));
console.log(subsetXORSum([5, 1, 6]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
