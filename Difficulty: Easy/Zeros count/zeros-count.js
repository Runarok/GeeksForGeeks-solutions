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
        let obj = new Solution();
        let res = obj.countZeroes(arr);
        console.log(res);
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to count the number of zeroes in the array
    countZeroes(arr) {
        let zeroCount = 0;

        // Iterate through the array and count elements equal to zero
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] === 0) {
                zeroCount++;
            }
        }

        // Return the total count of zeroes
        return zeroCount;
    }
}
