/**
 * @constructor
 */
var Queue = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    var tempStack = [];
    while(this.stack.length) {
        tempStack.push(this.stack.pop());
    }
    this.stack.push(x);
    while(tempStack.length) {
        this.stack.push(tempStack.pop());
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var front = this.stack.pop();
    this.stack.push(front);
    return front;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.stack.length === 0;
};