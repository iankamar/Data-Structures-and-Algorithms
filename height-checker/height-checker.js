var heightChecker = function(heights) {
    let etalon = [...heights].sort((a,b)=>a-b);
    let count = 0;
    etalon.forEach((a,b)=>heights[b] !== etalon[b] ? count++ : 0);
    return count;
};