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
        // let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        // let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.maxValue(A);
        console.log(res);
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
    maxValue(arr) {
        const MOD = 1000000007;

        // Sort the array in increasing order
        arr.sort((a, b) => a - b);
        
        let result = 0;

        // Calculate the sum
        for (let i = 0; i < arr.length; i++) {
            result = (result + arr[i] * i) % MOD;
        }
        
        return result;
    }
}
