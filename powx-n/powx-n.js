var myPow = function(x, n) {
    if(n < 0 && x !== 0){
        return myPow(1/x, n*-1);
    }
    
    if(n === 0){
       return 1
    }
    
    if(n === 1){
        return x
    }
    
    if (n % 2 === 0){
        const res = myPow(x, n / 2);
        return res * res
    }else{
        return myPow(x, n - 1) * x
    }
};