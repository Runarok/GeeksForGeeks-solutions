//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function get(p, n) {
    let m = Array.from({length : n}, () => Array(n).fill(0));
    for (let i = 1; i < n; i++) {
        m[i][i] = 0;
    }
    for (let L = 2; L < n; L++) {
        for (let i = 1; i < n - L + 1; i++) {
            let j = i + L - 1;
            m[i][j] = Number.MAX_SAFE_INTEGER;
            for (let k = i; k <= j - 1; k++) {
                let q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (q < m[i][j]) {
                    m[i][j] = q;
                }
            }
        }
    }
    return m[1][n - 1];
}

function find(s, p) {
    let arr = [];
    let ans = 0;
    for (let t of s) {
        if (t === '(') {
            arr.push([ -1, -1 ]);
        } else if (t === ')') {
            let b = arr.pop();
            let a = arr.pop();
            arr.pop();
            arr.push([ a[0], b[1] ]);
            ans += a[0] * a[1] * b[1];
        } else {
            arr.push([
                p[t.charCodeAt(0) - 'A'.charCodeAt(0)],
                p[t.charCodeAt(0) - 'A'.charCodeAt(0) + 1]
            ]);
        }
    }
    return ans;
}

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let s = readLine();
        let p = s.split(' ').map(Number);

        let obj = new Solution();
        let result = obj.matrixChainOrder(p);
        if (find(result, p) === get(p, p.length)) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    matrixChainOrder(arr) {
        const n = arr.length - 1;  // The number of matrices is arr.length - 1
        let dp = Array(n).fill().map(() => Array(n).fill(0));
        let split = Array(n).fill().map(() => Array(n).fill(0));  // Table to store split points

        // Fill the dp and split tables
        for (let length = 2; length <= n; length++) {  // Length of the chain
            for (let i = 0; i < n - length + 1; i++) {
                let j = i + length - 1;
                dp[i][j] = Infinity;  // Initialize with a large value
                for (let k = i; k < j; k++) {
                    let q = dp[i][k] + dp[k + 1][j] + arr[i] * arr[k + 1] * arr[j + 1];
                    if (q < dp[i][j]) {
                        dp[i][j] = q;
                        split[i][j] = k;
                    }
                }
            }
        }

        // Function to recursively build the multiplication string
        const buildOrder = (split, i, j) => {
            if (i === j) {
                return String.fromCharCode(65 + i);  // Return matrix name (A, B, C, ...)
            }
            let k = split[i][j];
            let leftOrder = buildOrder(split, i, k);
            let rightOrder = buildOrder(split, k + 1, j);
            return `(${leftOrder}${rightOrder})`;
        };

        // The result will be the multiplication order for the entire chain
        return buildOrder(split, 0, n - 1);
    }
}
