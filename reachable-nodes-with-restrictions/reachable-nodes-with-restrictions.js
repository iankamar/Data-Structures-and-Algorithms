/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    let ans = new Set();
    
    const nodes = new Map();
    const rest = new Set(restricted);
    
    if(rest.has(0)) return 0;
    
    for(const [start, dest] of edges) {
        const prev1 = nodes.get(start) || [];
        const prev2 = nodes.get(dest) || [];
        prev1.push(dest);
        prev2.push(start);
        nodes.set(start, prev1);
        nodes.set(dest, prev2);
    }
    const dfs = (node) => {
        if(rest.has(node)) return;
        ans.add(node)
        const dests = nodes.get(node) || [];
        for(const dest of dests) {
            if(!ans.has(dest)){
                dfs(dest);
            }
        }
        return;
    }
    
    dfs(0);
    return ans.size;
};