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
        let input_line = readLine().split(' ');
        let m = parseInt(input_line[0]);
        let n = parseInt(input_line[1]);
        let k = parseInt(input_line[2]);
        
        let obj = new Solution();
        let ans = obj.findKthNumber(m, n, k);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    // Function to find the kth smallest number in a given range.
    findKthNumber(m, n, k) {
        // Helper function to count how many numbers are <= l in the multiplication table
        function condition(l) {
            let count = 0;
            for (let i = 1; i <= m; i++) {
                count += Math.min(n, Math.floor(l / i)); // Count numbers in row i
            }
            return count;
        }

        // Binary search to find the kth smallest number
        let s = 1;
        let e = m * n;
        while (s <= e) {
            let mid = s + Math.floor((e - s) / 2);
            if (condition(mid) < k) {
                s = mid + 1; // Look for larger values
            } else {
                e = mid - 1; // Look for smaller values
            }
        }
        return s; // s will be the kth smallest number
    }
}
