var smallestStringWithSwaps = function(s, pairs) {
    if(!pairs.length) return s
    const map = {};
    let result = [];
    let str = [];
    let indexes = [];
    let visited = new Array(s.length).fill(false)
    const dfs = (i) =>{
        if(visited[i]) return;
        visited[i] = true;
        let nodes = map[i];
        str.push(s[i]);
        indexes.push(i);
        if(!nodes) return;
        for(let n of nodes){
            dfs(n)
        }
    }
    
    for(let [u,v] of pairs){
        if(map[u] == undefined) map[u] = [];
        if(map[v] == undefined) map[v] = [];
        
        map[u].push(v);
        map[v].push(u);
    }

    for(let i = 0;i<s.length;i++){
        str = [], indexes = [];
        dfs(i);
        str.sort();
        indexes.sort((a,b) => a - b);
        for(let j = 0;j<indexes.length;j++){
            let index = indexes[j];
            let char = str[j];
            result[index] = char;
        }
    }
    return result.join('')
};