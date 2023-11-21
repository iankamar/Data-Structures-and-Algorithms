/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph, path = [], i = 0, ret = []) {
    if (i >= graph.length) return ret; // base case

    for (const e of graph[i]) { // iter over all nodes
        allPathsSourceTarget(graph, [...path, i], e, ret);
    }

    if (i === graph.length - 1) ret.push([...path, i]); // if target push to results

    return ret;
};