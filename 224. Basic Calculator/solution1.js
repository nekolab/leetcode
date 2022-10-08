/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var env = [], context = { result: 0, operator: '+', operand: 0 };

    for(var i = 0; i < s.length; ++i) {
        switch(s[i]) {
            case '+':
            case '-':
                context.result += context.operand * (context.operator === '+' ? 1 : -1);
                context.operator = s[i];
                context.operand = 0;
                break;
            case '(':
                env.push(context);
                context = { result: 0, operator: '+', operand: 0 };
                break;
            case ')':
                var temp = context.result + context.operand * (context.operator === '+' ? 1 : -1);
                context = env.pop();
                context.operand = temp;
                break;
            case ' ': break;
            default:
                context.operand *= 10;
                context.operand += s[i]|0;
        }
    }

    return context.result + context.operand * (context.operator === '+' ? 1 : -1);
};