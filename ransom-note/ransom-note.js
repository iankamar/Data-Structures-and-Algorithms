/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
      let char = ransomNote[i]
      if(magazine.indexOf(char) !== -1) {
          // by removing character from the magazine we are ensuring
          // that each character is only used once in ransomNote
          magazine = magazine.replace(char, '')
      } else {
          return false
      }
  } 
    return true
};
