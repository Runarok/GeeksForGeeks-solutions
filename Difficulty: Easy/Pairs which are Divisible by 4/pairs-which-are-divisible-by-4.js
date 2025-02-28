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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        console.log(obj.count4Divisibles(arr));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to count pairs whose sum is divisible by 4.
    count4Divisibles(arr) {
        // Initialize frequency array for remainders {0, 1, 2, 3}.
        let remainderCount = [0, 0, 0, 0];
        
        // Count occurrences of each remainder (modulo 4)
        for (let num of arr) {
            remainderCount[num % 4]++;
        }
        
        // Count valid pairs:
        let count = 0;

        // Pairs of numbers both having remainder 0
        count += (remainderCount[0] * (remainderCount[0] - 1)) / 2;

        // Pairs of numbers with remainder 1 and remainder 3
        count += remainderCount[1] * remainderCount[3];

        // Pairs of numbers both having remainder 2
        count += (remainderCount[2] * (remainderCount[2] - 1)) / 2;

        return count;
    }
}
