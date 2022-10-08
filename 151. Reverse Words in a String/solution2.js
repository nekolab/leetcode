/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var info = [], SPACE = 0, CHARACTER = 1;
    var status = 0;   // 0 for blank, 1 for word
    
    var meet = function(what, where) {
        if (what === SPACE) {
            if (status === 0) { return; }
            if (status === 1) { info.push(where); status = 0; }
        } else if (what == CHARACTER) {
            if (status === 0) { info.push(where); status = 1; return; }
            if (status === 1) { return; }
        }
    };
    
    for (var i = str.length - 1; i >= 0; --i) {
        meet((str[i] === ' ' ? SPACE : CHARACTER), i);
    }
    
    if (info.length % 2 !== 0) { info.push(-1); }
    
    var start, end, buffer = [];
    for (i = 0; i < info.length; i += 2) {
        end = info[i];
        start = info[i + 1];
        for (++start; start <= end; ++start) {
            buffer.push(str[start]);
        }
        buffer.push(' ');
    }
    buffer.pop();
    
    return buffer.join('');
};