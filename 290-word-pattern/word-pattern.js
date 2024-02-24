var wordPattern = function(pattern, s) {
    const words = s.split(' '), p2w = new Map(), w2p = new Map();
    if (pattern.length !== words.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (p2w.has(pattern[i]) && p2w.get(pattern[i]) !== words[i] || w2p.has(words[i]) && w2p.get(words[i]) !== pattern[i]) {
            return false;
        }
        p2w.set(pattern[i], words[i]);
        w2p.set(words[i], pattern[i]);
    }
    return true;
};
