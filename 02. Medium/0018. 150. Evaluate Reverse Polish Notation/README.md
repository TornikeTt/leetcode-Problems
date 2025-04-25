# Reverse Polish Notation Expression Evaluator

## Overview
This program evaluates an arithmetic expression represented in Reverse Polish Notation (RPN) and returns an integer that represents the value of the expression.

Reverse Polish Notation is a mathematical notation in which every operator follows all of its operands. It eliminates the need for parentheses to define the order of operations.

## Features
- **Supported Operators**: The valid operators are `+`, `-`, `*`, and `/`.
- **Operands**: Each operand may be an integer or another valid expression.
- **Division**: The division between two integers always truncates towards zero.
- **Safe Evaluation**: There is no division by zero.
- **32-bit Integer**: All intermediate calculations and the final result can be represented in a 32-bit integer.

## How It Works
The program processes the input array of strings (`tokens`) and evaluates the expression using a stack-based algorithm tailored for Reverse Polish Notation.

### Examples
```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```
