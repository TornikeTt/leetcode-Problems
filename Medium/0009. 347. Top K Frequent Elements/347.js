var topKFrequent = function (nums, k) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    // count = { 1: 3, 2: 2, 3: 1 }

    const arr = Object.entries(count).map(([num, freq]) => [freq, +num]);
    arr.sort((a, b) => b[0] - a[0]);

    // arr  = [ [ 3, 1 ], [ 2, 2 ], [ 1, 3 ] ]

    return arr.slice(0, k).map((pair) => pair[1]);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
