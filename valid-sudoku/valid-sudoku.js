/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
  const seen = new Set()
  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      let char = board[i][j]
      if (char !== '.') {
        if (
          seen.has(`${char} in row ${i}`) ||
          seen.has(`${char} in col ${j}`) ||
          seen.has(`${char} in block ${Math.floor(i / 3)} - ${Math.floor(j / 3)}`)
        ) {
          return false
        }
        seen.add(`${char} in row ${i}`)
        seen.add(`${char} in col ${j}`)
        seen.add(`${char} in block ${Math.floor(i / 3)} - ${Math.floor(j / 3)}`)
      }
    }
  }
  return true
};