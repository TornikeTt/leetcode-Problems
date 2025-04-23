# 🧱 MinStack

Design a stack that supports `push`, `pop`, `top`, and retrieving the **minimum element** in **constant time**.

## 📌 Requirements

Implement the `MinStack` class with the following methods:

- `MinStack()`  
  Initializes the stack object.

- `void push(int val)`  
  Pushes the element `val` onto the stack.

- `void pop()`  
  Removes the element on the top of the stack.

- `int top()`  
  Gets the top element.

- `int getMin()`  
  Retrieves the minimum element in the stack.

⚠️ All operations must run in **O(1)** time complexity.

---

## 📘 Example

```js
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output:
[null,null,null,null,-3,null,0,-2]
