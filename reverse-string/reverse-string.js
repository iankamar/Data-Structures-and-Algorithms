var reverseString = function(s) {
    const len = s.length;
    for(let i=0; i<len; i++){
        s.splice(i, 0, s.pop());
    }
    return s;
};