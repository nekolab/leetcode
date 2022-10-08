/**
 * @constructor
 */
var LRUCache = function(capacity) {

    this.head = new LRUCache.Node(null, null, null);
    this.tail = new LRUCache.Node(null, this.head, null);
    this.head.next = this.tail;

    this.cache = {};
    this.capacity = capacity;
    this.length = 0;
};

/**
 * @constructor
 */
LRUCache.Node = function(key, val, prev, next) {
    this.key  = key;
    this.val  = val;
    this.prev = prev;
    this.next = next;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.cache) {
        var node = this.cache[key];

        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.head.next.prev = node;
        node.next = this.head.next;

        this.head.next = node;
        node.prev = this.head;

        return node.val;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    var node;
    if (key in this.cache) {
        node = this.cache[key];
        node.val = value;

        node.prev.next = node.next;
        node.next.prev = node.prev;

        this.head.next.prev = node;
        node.next = this.head.next;

        this.head.next = node;
        node.prev = this.head;
    } else {
        node = this.cache[key] = new LRUCache.Node(key, value, this.head, this.head.next);
        this.head.next.prev = node;
        this.head.next = node;

        if (this.length >= this.capacity) {
            node = this.tail.prev;
            delete this.cache[node.key];
            this.tail.prev = this.tail.prev.prev;
            this.tail.prev.next = this.tail;
            --this.length;
        }

        ++this.length;
    }
};