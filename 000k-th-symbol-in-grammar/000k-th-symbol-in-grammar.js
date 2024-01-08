var kthGrammar = function(n, k) {
    if (n === 1) return 0;
    const parent = kthGrammar(n-1, Math.ceil(k / 2));
    const isKOdd = k % 2 == 1;
    if (parent === 1) { // 1, 0
        return isKOdd ? 1 : 0;
    } else { // 0 1
        return isKOdd ? 0 : 1;
    }
};