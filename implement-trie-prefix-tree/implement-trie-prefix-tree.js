var Trie = function() {
    this.trie = {};
};

Trie.prototype.insert = function(word) {
    let trie = this.trie;
    for (let letter of word) {
        !trie[letter] && ( trie[letter] = {} );
        trie = trie[letter];
    };
    trie['.'] = null;
};

Trie.prototype.search = function(word) {
    let trie = this.trie;
    for (let letter of word) {
        if (!trie[letter]) {
            return false;
        };
        trie = trie[letter];
    };
    return '.' in trie;
};

Trie.prototype.startsWith = function(prefix) {
    let trie = this.trie;
    for (let letter of prefix) {
        if (!trie[letter]) {
            return false;
        }
        trie = trie[letter];
    };
    return Object.keys(trie).length !== 0;
};