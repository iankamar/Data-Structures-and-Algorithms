const heightChecker = heights => {
    const heightsClone = [...heights];
    heights.sort((a,b) => a - b);
    
    return heightsClone.reduce((acc, val, i) => acc + !(heights[i] === val), 0);
};