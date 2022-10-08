/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var token, op1, op2, stack = [];
    while(token = tokens.shift()) {
        if (token === '+') {
            op2 = stack.pop();
            op1 = stack.pop();
            stack.push((op1 + op2)|0);
        } else if (token === '-') {
            op2 = stack.pop();
            op1 = stack.pop();
            stack.push((op1 - op2)|0);
        } else if (token === '*') {
            op2 = stack.pop();
            op1 = stack.pop();
            stack.push((op1 * op2)|0);
        } else if (token === '/') {
            op2 = stack.pop();
            op1 = stack.pop();
            stack.push((op1 / op2)|0);
        } else {
            stack.push(token|0);
        }
    }
    
    return stack.pop();
};