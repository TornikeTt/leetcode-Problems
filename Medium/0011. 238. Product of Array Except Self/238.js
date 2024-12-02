function productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    // res = [ 1, 1, 1, 1 ]

    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    // res = [ 1, 1, 2, 6 ]

    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }

    // res = [ 24, 12, 8, 6 ]

    return res;
}

productExceptSelf([1, 2, 3, 4]);
