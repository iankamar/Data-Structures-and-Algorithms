/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function(n) {
    let final=[];
    while(n!==0){
    if(n%3===0 && n%5===0){
        final.push('FizzBuzz');
    }
    else if(n%3===0){
        final.push('Fizz');
    }
    else if(n%5===0){
        final.push('Buzz');
    }
    else{
        final.push(n.toString());
    }
    n--;
    }
    return final.reverse();
};