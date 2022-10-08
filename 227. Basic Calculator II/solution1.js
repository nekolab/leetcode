/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var calc = function(loprand, roprand, operator) {
        switch (operator) {
            case '+': return loprand + roprand;
            case '-': return loprand - roprand;
            case '*': return loprand * roprand;
            case '/': return Math.floor(loprand / roprand);
        }
    };

    var tokenCursor = 0;
    var getToken = function() {
        if (tokenCursor >= s.length) { return null; }
        var token = s[tokenCursor++], tmp;
        switch(token) {
            case '(': case ')':
            case '+': case '-':
            case '*': case '/':
                return token;
            case ' ':
                return getToken();
            default:
                tmp = token|0;
                token = s[tokenCursor];
                while(token && token.charCodeAt(0) >= 48
                            && token.charCodeAt(0) <= 57) {
                    tmp = tmp * 10 + (token|0);
                    token = s[++tokenCursor];
                }
                return tmp;
        }
    };

    var Context = function() {
        this.oprand1 = null;
        this.oprand2 = null;
        this.oprand3 = null;
        this.operator1 = null;
        this.operator2 = null;

        this.feed = function(something) {
            if (this.oprand1 === null) { this.oprand1 = something; return false; }
            if (this.operator1 === null) { this.operator1 = something; return false; }
            if (this.oprand2 === null) { this.oprand2 = something; return false; }
            if (this.operator2 === null) { this.operator2 = something; return false; }
            if (this.oprand3 === null) { this.oprand3 = something; return true; }
        };

        this.calc = function() {
            if ((this.operator1 === '+' || this.operator1 === '-') &&
                (this.operator2 === '*' || this.operator2 === '/')) {
                this.oprand2 = calc(this.oprand2, this.oprand3, this.operator2);
                this.operator2 = this.oprand3 = null;
            } else {
                this.oprand1 = calc(this.oprand1, this.oprand2, this.operator1);
                this.operator1 = this.operator2;
                this.oprand2 = this.oprand3;
                this.operator2 = this.oprand3 = null;
            }
        };

        this.fullCalc = function() {
            if (!this.operator1) { return this.oprand1; }
            if (this.operator2) { this.calc(); }
            return calc(this.oprand1, this.oprand2, this.operator1);
        };
    };
    var context = new Context(), contexts = [];

    var token;
    while((token = getToken()) != null) {
        switch(token) {
            case '(':
                contexts.push(context);
                context = new Context();
                break;
            case ')':
                token = context.fullCalc();
                context = contexts.pop();
            default:
                if (context.feed(token)) {
                    context.calc();
                }
        }
    }
    return context.fullCalc();
};