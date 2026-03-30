class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
groupAnagrams(strs) {
    let newarr = [];
    let visited = new Array(strs.length).fill(false); // Track used strings

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue; // Skip if already grouped

        let array = [strs[i]];
        visited[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (!visited[j] &&
                strs[i].split("").sort().join("") === strs[j].split("").sort().join("")) {
                array.push(strs[j]);
                visited[j] = true; // Mark as grouped
            }
        }

        newarr.push(array);
    }

    return newarr;
}


    
}
