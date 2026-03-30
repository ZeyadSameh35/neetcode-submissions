class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      console.log(s);
      var flag = true;
      var j = s.length - 1 ;
      for (let i = 0 ; i < s.length ; i++ ){
        
        if(s[i] === s[j]){
            j--;
        }
        else {
            flag = false;
        }
      }
return flag;

    }
}
