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
        let n = parseInt(readLine());
        let arr = new Array(2*n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<2*n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.minThrow(arr, n));
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    minThrow(arr, n) {
        let d = {};
        
        // Populate the dictionary (d) with snake and ladder mappings
        for (let i = 0; i < n * 2; i += 2) {
            d[arr[i]] = arr[i + 1];
        }
        
        this.memo = {};  // Create a memoization object
        return this.solve(1, 30, d);  // Call the recursive helper function
    }

    solve(curr, last, d) {
        if (curr === last) {
            return 0;  // Reached the last square
        }
        
        if (curr > last) {
            return Infinity;  // Went beyond the last square
        }
        
        if (curr in this.memo) {
            return this.memo[curr];  // Return the stored result if already computed
        }
        
        if (curr in d) {
            if (d[curr] < curr) {
                this.memo[curr] = Infinity;
                return Infinity;  // Return infinity if it's a snake
            } else {
                curr = d[curr];  // Move to the new position if it's a ladder
            }
        }
        
        let val = Infinity;
        for (let i = 1; i <= 6; i++) {
            val = Math.min(val, this.solve(curr + i, last, d));  // Try all dice rolls (1-6)
        }
        
        this.memo[curr] = val + 1;  // Store the result in memoization
        return this.memo[curr];
    }
}
