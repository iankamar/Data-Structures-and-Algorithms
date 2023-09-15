/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let map = new Map();
  for (let j of J)
      map.set(j, 0);
    
    let res = 0;
    for (let s of S)
        if (map.has(s)) res++;
    
    return res
};