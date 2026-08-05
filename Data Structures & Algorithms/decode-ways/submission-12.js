class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

        if (s.length === 0 || s[0] === '0') {
            return 0;
        }

        let n = s.length;
        let dp = new Array(n + 1).fill(0);

        dp[0] = 1; // Empty string
        dp[1] = 1; // First character (already checked it's not '0')

        for (let i = 2; i <= n; i++) {

            // One-digit decode
            if (s[i - 1] !== '0') {
                dp[i] += dp[i - 1];
            }

            // Two-digit decode
            let twoDigit = parseInt(s.substring(i - 2, i));

            if (twoDigit >= 10 && twoDigit <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}