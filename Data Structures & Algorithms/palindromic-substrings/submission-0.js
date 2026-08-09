class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let resIdx = 0,
        resLen = 0;
        const n = s.length;
        let counter = 0;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    counter++;
                }
            }
        }
        return counter;
    }
}
