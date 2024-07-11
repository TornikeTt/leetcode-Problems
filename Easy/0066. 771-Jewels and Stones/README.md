You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

``` 

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Explanation:
First stone in “stones” - a - "a"AAbbbb
Second stone in “stones” - A - a"A"Abbbb
Third stone in “stones” - A - aA"A"bbbb"

```
