/**
 * Created by Alex Bychkov on 27.03.2020.
 */

function RPNCalculator() {
    // We will keep our numeric values and operators which were properly entered by an user or calculated during our operations here
    var stack = [];
    // the available operator symbols
    var operators = ['-', '+', '*', ':', '/'];

    //Only numeric or math operators are allowed in the string, everyhing else will be ignored
    this.submitExpression = function(str) {
        try {
            str.trim();
            var expression_parts = (str.length) ? str.split(" ") : [];
            for (var i = 0; i < expression_parts.length; i++) {
                var expression_part = expression_parts[i].trim();
                if (operators.indexOf(expression_part) != -1) {
                    //if the operator is not allowed it will be ignored
                    if (operatorIsAllowed()) stack.push(expression_part);
                    else console.log(expression_part + ' will be ignored. There are not enough numeric values in the stack.');
                } else {
                    //adding a numeric value
                    if (expression_part.length && !isNaN(expression_part)) stack.push(Number(expression_part));
                    else if (isNaN(expression_part)) console.log(expression_part + ' will be ignored. Please use only space separated numeric values and math operators');
                }
            }
            return stack.length ? calculate() : '';
        } catch (e) {
            console.log("A string should be submitted!");
            return '';
        }
    };


    this.reset = function() {
        stack = [];
    };

    // The function will find the first available operator and 2 preceding it numeric values and conduct an operations
    // The result of the operation will be returned
    var calculate = function() {
        var firstOperatorIndex = getFirstOperatorIndex();
        // calculations should be done only while operators are available
        if (firstOperatorIndex > -1) {
            var operator = stack[firstOperatorIndex];
            //Numeric values which will participate in an operation
            var firstNumeric = stack[firstOperatorIndex - 2];
            var secondNumeric = stack[firstOperatorIndex - 1];
            var resultNumeric;
            switch (operator) {
                case '-' :
                    resultNumeric = firstNumeric - secondNumeric;
                    break;
                case '+' :
                    resultNumeric = firstNumeric + secondNumeric;
                    break;
                case '*' :
                    resultNumeric = firstNumeric * secondNumeric;
                    break;
                case ':' :
                case '/' :
                    if (secondNumeric) resultNumeric = firstNumeric / secondNumeric
                    else {
                        stack = [];
                        return 'E';
                    }
                    break;
            }
            // removing the used operator and the numeric before it
            stack.splice(firstOperatorIndex - 1, 2);
            // switching the first of two used numerics with the resulting value
            stack[firstOperatorIndex - 2] = resultNumeric;
            // if more operators are available another operation will be conducted
            return calculate();
        } else {
            return stack[stack.length - 1];
        }
    };

    var getFirstOperatorIndex = function() {
        var i = 0;
        while (i < stack.length - 1 && operators.indexOf(stack[i]) == -1) i++;
        return operators.indexOf(stack[i]) > -1 ? i : -1;
    };

    //Operator is allowed only if there are enough numeric values for meaningful operations
    var operatorIsAllowed = function() {
        var operatorsNumber = 0;
        for (var i = 0; i < stack.length; i++)
            if (operators.indexOf(stack[i]) > -1) operatorsNumber++;
        return operatorsNumber * 2 < stack.length - 1;
    }
}