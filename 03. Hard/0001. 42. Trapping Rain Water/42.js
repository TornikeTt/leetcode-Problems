function trap(height) {

    if (!height || height.length === 0) {
        return 0;
    }

    let left_pointer = 0;
    let right_pointer = height.length - 1;

    let leftMax = height[left_pointer]; 
    let rightMax = height[right_pointer];

    let res = 0;

    while (left_pointer < right_pointer) {

        if (leftMax < rightMax) {
            left_pointer++;

            leftMax = Math.max(leftMax, height[left_pointer]);
            res += leftMax - height[left_pointer];
        } else {
            right_pointer--;

            rightMax = Math.max(rightMax, height[right_pointer]);
            res += rightMax - height[right_pointer];
        }

    }

    return res;
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
