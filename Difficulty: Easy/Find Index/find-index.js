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
        let a = readLine().trim().split(" ").map((x) => parseInt(x));
        let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findIndex(a, key);
        let s = "";
        for (let it of res) {
            s += it + " ";
        }
        console.log(s);
    }
}

// } Driver Code Ends

class Solution {
    findIndex(arr, key) {
        // code here
        let firstIn = -1;
        let lastIn = -1;
        
        // Finding the first occurrence of 'key'
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                firstIn = i;  // store the first occurrence
                break; // No need to continue once we find the first occurrence
            }
        }
        
        // Finding the last occurrence of 'key'
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === key) {
                lastIn = i;  // store the last occurrence
                break; // No need to continue once we find the last occurrence
            }
        }
        
        return [firstIn, lastIn];
    }
}
