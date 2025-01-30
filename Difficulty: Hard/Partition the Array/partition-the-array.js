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
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.minDifference(N, A);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} A
 * @returns {number}
*/

class Solution {
    minDifference(N, A) {
        // Step 1: Compute the prefix sum array
        let arr = new Array(N + 1).fill(0);
        for (let i = 0; i < N; i++) {
            arr[i + 1] = arr[i] + A[i];
        }

        // Helper function to find min/max partition sum between low and high indices
        function fun(low, high) {
            let l = low, h = high;
            while (l < h) {
                let m = Math.floor((l + h) / 2);
                let ls = arr[m + 1] - arr[low];
                let rs = arr[high + 1] - arr[m];
                if (ls >= rs) {
                    h = m;
                } else {
                    l = m + 1;
                }
            }

            let c1 = arr[l + 1] - arr[low];
            let c2 = arr[high + 1] - arr[l + 1];
            if (l > low) {
                let c3 = arr[l] - arr[low];
                let c4 = arr[high + 1] - arr[l];
                if (Math.abs(c1 - c2) > Math.abs(c3 - c4)) {
                    return [Math.min(c3, c4), Math.max(c3, c4)];
                }
            }
            return [Math.min(c1, c2), Math.max(c1, c2)];
        }

        let ans = 10 ** 9;

        // Step 2: Try every partition and calculate the minimum difference
        for (let i = 1; i < N - 2; i++) {
            let [mi1, mx1] = fun(0, i);
            let [mi2, mx2] = fun(i + 1, N - 1);
            ans = Math.min(ans, Math.max(mx1, mx2) - Math.min(mi1, mi2));
        }

        return ans;
    }
}
