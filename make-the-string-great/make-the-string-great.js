/**
 * @param {string} s
 * @return {string}
 */

var makeGood = function (s) {
let strToArray = s.split('')
for(let j=0;j<strToArray.length;j++){
if (j + 1 === strToArray.length) {break}
if (strToArray[j].toUpperCase() == strToArray[j + 1] || strToArray[j] == strToArray[j + 1].toUpperCase()) {
if(strToArray[j]===strToArray[j+1]){
continue
}else{
strToArray.splice(j, 1)
strToArray.splice(j, 1)
j = -1
}
}
}
return strToArray.join('')
};