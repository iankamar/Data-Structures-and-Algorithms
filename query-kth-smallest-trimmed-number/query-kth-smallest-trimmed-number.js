const smallestTrimmedNumbers = (a, queries) => {
    let res = [];
    for (const [k, trim] of queries) {
        let b = a.map((s, i) => [s.slice(s.length - trim), i]); // trim the last digit process
        b.sort((x, y) => {
            if (x[0] == y[0]) return x[1] - y[1]; // number equal, lower index is considered to be smaller
            return x[0].localeCompare(y[0]); // sort by number increasing in string format
        })
        res.push(b[k - 1][1]);
    }
    return res;
};