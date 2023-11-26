var numsSameConsecDiff = function(n, k) {
    let st = new Set()
    let val=0
    function help(num){
        if((''+num).length == n){
            st.add(num)
            return
        }
        val=num % 10
        if( val+k <= 9) help(num * 10 + val + k)
        val=num % 10
        if(val-k >= 0 ) help(num * 10 + val - k)
    }
    for(let q=1; q<10;q++) help(q)
    return [...st]
};