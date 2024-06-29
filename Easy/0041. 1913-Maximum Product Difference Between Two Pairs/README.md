In this problem, we need to determine the maximum value of:

a * b - c * d

Where a, b, c, d are all elements in nums. Note that while it is possible for the same value to be used multiple times, we are not allowed to use the same index of nums multiple times.

For example, let's say a = b = 4. This is only possible if 4 shows up at least twice in nums. If 4 only appears once in nums, we can't use it twice.

Let's separate the equation into two parts:

a * b
c * d
As we are subtracting the 2nd part from the 1st part, we want to maximize the 1st part while minimizing the 2nd part.

Because the values of nums are non-negative, we can maximize a product by choosing the two largest elements in nums. Similarly, we can minimize a product by choosing the two smallest elements in nums. Thus, we will choose the following elements:

``` 
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
```
