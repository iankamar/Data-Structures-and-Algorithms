/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    
    const visited = new Set();
    const queue = [];
    
    queue.push([1, n - 1, 0, 0]);
    
    while (queue.length > 0) {
        const [currNum, currRow, currCol, moves] = queue.shift();
        
        if (currNum === n * n) return moves;
        if (visited.has(currNum)) continue;
        
        visited.add(currNum);
        
        for (let i = 1; i <= 6; i++) {
            const neiNum = currNum + i;
            
            if (neiNum > n * n) continue;
            
            const [neiRow, neiCol] = getRowCol(neiNum);
            
            if (withinBound(neiRow, neiCol)) {
                const val = board[neiRow][neiCol];
                
                if (val === -1) {
                    queue.push([neiNum, neiRow, neiCol, moves + 1]);
                }
                else {
                    const [skipRow, skipCol] = getRowCol(val); 
                    queue.push([val, skipRow, skipCol, moves + 1]);
                }
            }
        }
     }
    
    return -1;
    
    
    function withinBound(row, col) {
        return row >= 0 && col >= 0 && row < n && col < n;
    }
    
    function getRowCol(num) {
        const row = n - Math.floor((num - 1) / n) - 1;
        let col = (num - 1) % n;
        
        if ((n % 2 === 0 && row % 2 === 0) || (n % 2 === 1 && row % 2 === 1)) {
            col = n - col - 1;
        }
        
        return [row, col];
    }
};