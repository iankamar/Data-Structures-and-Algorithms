let fib = function(N) {
   if(N===0){
       return 0;
   } 

   if(N===1){
       return 1;
   }
   let i=2;
   let a=0;
   let b=1;
   while(i<=N){
       let temp=a+b;
       a=b;
       b=temp;
       i++;
   }
   return b;
};