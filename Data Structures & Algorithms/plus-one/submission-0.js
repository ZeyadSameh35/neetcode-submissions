class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let str = "";
        digits.forEach((num) =>{
            str+=num;
        })
        const result = parseInt(str) + 1;
        return result.toString().split('');
    }
}
