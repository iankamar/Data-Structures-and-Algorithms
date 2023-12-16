var validMountainArray = function(A) {
    if(A.length < 3) {
        return false;
    }
    let max = [0,0];
    for(let i = 0; i < A.length; i++) {
        if(A[i] > max[1]) {
            max[0] = i;
            max[1] = A[i];
        }
    }
    if(max[0] == 0 || max[0] == A.length - 1){
        return false;
    }
    for(let i = 0; i < max[0]; i++) {
        if(A[i] >= A[i + 1]) {
            return false;
        }
    }
    
    for(let i = max[0] + 1; i < A.length; i++) {
        if(A[i - 1] <= A[i]) {
            return false;
        }
    }
    return true;
};