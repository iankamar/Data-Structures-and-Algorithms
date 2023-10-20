/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // Split on slash
    let s = path.split('/');
    
    // Filter out empty strings
    s = s.filter((el)=>el!=='');
    
    const answer = [];
    
    for(const el of s){        
        if(el === '.'){
            // do nothing
        }else if(el === '..'){
            answer.pop(); // In JavaScript no need to check whether the array is empty or not before popping
        }else{
            answer.push(el);
        }
    }
    
    return '/' + answer.join('/');
};