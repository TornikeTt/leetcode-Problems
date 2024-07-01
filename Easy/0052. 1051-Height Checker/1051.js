var heightChecker = function (heights) {
    let newsortedarray = check([...heights]);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== newsortedarray[i]) {
            count++;
        }
    }

    return count;
};

function check(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > val) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = val;
    }

    return arr;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));
