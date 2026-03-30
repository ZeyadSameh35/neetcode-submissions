class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded += str.length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // Find the delimiter #
            while (str[j] !== "#") j++;

            const length = parseInt(str.slice(i, j));
            const content = str.slice(j + 1, j + 1 + length);
            res.push(content);
            i = j + 1 + length;
        }

        return res;
    }
}
