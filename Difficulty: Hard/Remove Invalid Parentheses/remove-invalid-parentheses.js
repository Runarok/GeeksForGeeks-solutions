//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.removeInvalidParentheses(s);
        res.sort();
        let ans = "";
        for(let i = 0 ; i < res.length ;i++)
            ans+=res[i]+" ";
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


class Solution {
    removeInvalidParentheses(s) {
        const [left, right] = this.getRightLeftRemoveCount(s);
        const results = new Set();
        this.getValidParentheses(s, left, right, results, new Set());
        return Array.from(results);
    }

    getValidParentheses(s, left, right, results, cache) {
        if (left === 0 && right === 0) {
            if (this.isValidParentheses(s)) {
                results.add(s);
            }
        }

        for (let idx = 0; idx < s.length; idx++) {
            const c = s[idx];
            // Skip strings that have already been analyzed
            const temp = s.slice(0, idx) + s.slice(idx + 1);
            if (cache.has(temp)) continue;
            cache.add(temp);

            // Remove parentheses
            if (c === '(' && left > 0) {
                this.getValidParentheses(temp, left - 1, right, results, cache);
            } else if (c === ')' && right > 0) {
                this.getValidParentheses(temp, left, right - 1, results, cache);
            }
        }
    }

    // Checking left and right parenthesis count
    getRightLeftRemoveCount(s) {
        let left = 0, right = 0;
        for (let c of s) {
            if (c === '(') {
                left += 1;
            } else if (c === ')') {
                right += 1;
                if (left > 0) {
                    right -= 1;
                    left -= 1;
                }
            }
        }
        return [left, right];
    }

    isValidParentheses(s) {
        let count = 0;
        for (let c of s) {
            if (c === '(') {
                count += 1;
            } else if (c === ')') {
                count -= 1;
            }
            if (count < 0) return false;
        }
        return count === 0;
    }
}
