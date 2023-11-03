var nearestExit = function (maze, entrance) {
    const EXIT_ROW = [0, maze.length - 1];
    const EXIT_COL = [0, maze[0].length - 1];
    const EMPTY_CELL = '.';
    const WALL = '+';

    return bfs();

    function bfs() {
        const q = [];
        let n = 0;

        q.push(entrance);

        while (q.length > 0) {
            let size = q.length;

            while (size--) {
                const cur = q.shift();
                const row = cur[0];
                const col = cur[1];
                const val = maze[row] && maze[row][col];
                
                const canProceed = val && (val !== WALL && val === EMPTY_CELL);
                if (!canProceed) continue;
    
                maze[row][col] = WALL;
                const isAtBorder = EXIT_ROW.includes(row) || EXIT_COL.includes(col);
                if (n > 0 && isAtBorder) {
                    return n;
                }
    
                const up = [row - 1, col];
                const down = [row + 1, col];
                const left = [row, col - 1];
                const right = [row, col + 1];
                q.push(up, down, left, right);
            }
            n++;
        }

        return -1;
    }
};