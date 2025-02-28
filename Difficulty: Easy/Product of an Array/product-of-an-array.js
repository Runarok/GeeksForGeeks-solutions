//{ Driver Code Starts
// Initial Template for javascript

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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let mod = 1000000007;
        let obj = new Solution();
        let res = obj.product(arr);
        if (res === -0) res = 0;
        console.log(res.toString());

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    product(arr) {
        // Initialize the result to 1
        let ans = 1;
        
        // Modulo value to avoid overflow
        let mod = 1000000007;
        
        // Length of the array
        let n = arr.length;
        
        // Iterate through each element of the array
        for (let i = 0; i < n; i++) {
            // Apply modulo operation to each element
            arr[i] = arr[i] % mod;
            
            // Update the product result using modulo to prevent overflow
            ans = (ans * arr[i]) % mod;
        }
        
        // Return the final product modulo 1000000007
        return ans;
    }
}
