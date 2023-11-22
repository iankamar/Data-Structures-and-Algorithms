/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
      return [];
    }
    const digitMap = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    };
    if(digits.length > 1) {
      const firstDigit = digits.slice(0, 1);
      const otherDigits = digits.slice(1);
      const otherLetterCombinations = letterCombinations(otherDigits);
      const firstDigitletters = digitMap[firstDigit];
      let resultArr = [];
      firstDigitletters.forEach(item1 => {
        otherLetterCombinations.forEach(item2 => {
          resultArr.push(item1 + item2);
        })
      })
      return resultArr;
    } else {
      return digitMap[digits];
    }
  };