/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

var findWinners = function(matches) {
    const n = matches.length;
    
    const players = [];
    
    for (let i = 0; i < n; ++i) {
        const [winner, loser] = matches[i];
       
        if (players[winner] == null) players[winner] = [0, 0];
        if (players[loser] == null) players[loser] = [0, 0];
        
        players[winner][0] += 1;
        players[loser][1] += 1;
    }
    
    const first = [];
    const second = [];
    
    for (let i = 1; i <= 1e5; ++i) {
        if (players[i] != null) {
            if (players[i][1] === 0) first.push(i);
            else if (players[i][1] === 1) second.push(i);
        }
    }
    
    return [first, second];
};