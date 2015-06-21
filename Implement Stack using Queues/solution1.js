/**
 * @constructor
 */
var Stack = function() {
    this.queue = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.queue.push(x);
    for(var i = this.queue.length - 1; i > 0 ; --i) {
        this.queue.push(this.queue.shift());
    }
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.queue.shift();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    // var result = this.queue.shift();
    // this.push(result);
    // return result;
    return this.queue[0];    // Or simulate peek
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return !this.queue.length;
};