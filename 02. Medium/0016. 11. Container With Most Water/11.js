var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;

    while (left < right) {
        /*
            To calculate area, we use the formula height * length. In this case:

            1. Height is the minimum height between the two lines.
            2. Length is the distance between the two lines.
        */
        const area = Math.min(height[left], height[right]) * (right - left);
        /*   
            area = 8 49 18 40 24 6 10 4
        */
        res = Math.max(res, area);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
