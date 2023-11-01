/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var validPath = function(n, edges, start, end) {
  if (edges.length === 0) return true;
  
  edges = edges.reduce((acc, [u, v]) => {
    acc[u] = acc[u] || [];
    acc[u].push(v);
    acc[v] = acc[v] || [];
    acc[v].push(u);
    return acc;
  }, {});
  const visited = {};
  
  const valid = (edges, visited, start, end) => {
    visited[start] = true;
    if(edges[start].includes(end)) return true;
    
    for(const e of edges[start].filter(e => !visited[e])) {
      if(valid(edges, visited, e, end)) return true;
    }
    
    return false;
  };
  
  return valid(edges, visited, start, end);
};