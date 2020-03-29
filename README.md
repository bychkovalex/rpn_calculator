Reverse Polish Notation Calculator
(c) Alex Bychkov
=======================
Current project was prepared as a solution for coding exercise
https://gist.github.com/dennis-baskin/f6f1b8521eb387f7ddc6a755793f8a6b

=======================
User Guide

Please open index.html file in any browser with JS enabled for execution.

Only Numeric values and math operators or their space separated sequences can be entered.
'-', '+', '*', ':', '/' are allowed operators.
Other symbols will be ignored. Expressions which are not space separated and contain both numeric values and operators or other symbols will be ignored as well.
Math operators can be entered only if there enough numeric values were entered previously for meaningful operations, otherwise they will be ignored.
Division by Zero will show 'E'.
Click "Submit" or press "Enter" to enter a value.
Click 'Reset' to reset calculator.

=======================
Developer Guide

The calculator is developed as a simple JS function. The new instance should be created with createRPNCalculator().
Use calculator.submitExpression() to enter a new value or sequence.
Use calculator.reset() to reset a calculator.
See example of the usage in index.html.

=======================
Development notes

I used a pure JS (ES5) for this task. Thus I developed the calculator as a JS function. It is really enough for this simple project.
I provided 2 methods (submitExpression and reset) for the usage, everything else is private.
I used an recursion inside the function as it is always fun to do.
It would be fun to have functionality for clear and memory. This could be pretty easily added.
I prepared a very basic UI to show its usage.
