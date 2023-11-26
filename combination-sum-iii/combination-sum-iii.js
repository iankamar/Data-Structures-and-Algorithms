var combinationSum3 = function(k, n) {
    let result = {};
    let max = Math.min(n, 9);
    for (let i = max; i > 0; i--) {
        deep(i, 1, 0, '' + i);
    };
    return Object.keys(result).map((a) => a.split(','));
    
    function deep(num, localK, sum, prop) {
        if (sum > n || localK > k) {
            return false;
        };
        if (localK === k) {
            if (sum + num === n) {
                result[prop] = true;
            };
            return;
        };
        for (let i = num - 1; i > 0; i--) {
            deep(i, localK + 1, sum + num, i + ',' + prop);
        };
    };
};