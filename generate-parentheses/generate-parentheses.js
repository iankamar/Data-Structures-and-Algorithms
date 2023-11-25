var generateParenthesis = function(n) {
  const r = [];
  const gen = (left, right, _r) => {
    if (left === n && right === n) {
      r.push(_r);
      return;
    }
    if (left < n) gen(left + 1, right, `${_r}(`);
    if (left > right && right < n) gen(left, right + 1, `${_r})`);
  }
  
  gen(0, 0, '');
  
  return r;
};