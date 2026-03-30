class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return '';
    let count = {};
    let window = {};
    let min = Infinity;
    for (const c of t){
    count[c] = (count[c] || 0) + 1;
    }
    let have = 0;
    let need = Object.keys(count).length;
    let res = [-1,-1];
    let resLen = Infinity;
    let l = 0;

     for (let r = 0 ; r < s.length ; r++){
        let c = s[r];
        window[c] = (window[c] || 0) + 1;
        if (count[c] && window[c] === count[c]){
            have++;
        }

        while (have === need){
            if (r - l + 1 < resLen){
                resLen = r - l + 1;
                res = [l,r];
            }
            window[s[l]]--;
         if (count[s[l]] && window[s[l]] < count[s[l]]) {
                    have--;
                }
                l++;
        }

     }
     return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);

    }

   
}
