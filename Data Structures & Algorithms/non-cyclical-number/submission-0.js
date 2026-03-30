class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const MAX_LOOP_ITERATIONS = 10000; 

        function power(n) {
        let sum = 0;
        let i = 0 ;
        while (n >= 1){
        // console.log('iteration ' + i + " "+ "number modulus= " + n%10)
          sum += (n%10) ** 2 ;
          i++
          n = Math.floor(n / 10);
         // console.log('iteration ' + i + " "+ "number = " + n)
         // console.log('iteration ' + i + " "+ "sum  = " + sum)
        
        }    
return sum;
        }
     let flag = true;
      let sum = n;
      let i = 0;
      while (sum != 1){
        sum = power(sum);
       
      if (i === MAX_LOOP_ITERATIONS){
        flag = false
        break;
       }
        
       i++;
      }
      return flag
    }
    };

    

