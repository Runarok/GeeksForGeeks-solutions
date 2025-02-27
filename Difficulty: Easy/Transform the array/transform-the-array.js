//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    while (t > 0) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let ans = obj.valid(arr);

        console.log(ans.join(' '));
        console.log("~");
        t--;
    }
}

// } Driver Code Ends

// Back-end complete function Template for javascript
class Solution {

    valid(arr) {
        let n = arr.length;
        let result = [];
        let zeroCount = 0;

        let i = 0;
        while (i < n) {
            if (arr[i] === 0) {
                zeroCount++;
                i++;
                continue;
            }

            // Check the next non-zero element
            let j = i + 1;
            while (j < n && arr[j] === 0) {
                zeroCount++;
                j++;
            }

            if (j === n) {
                result.push(arr[i]);
                break;
            }

            if (arr[i] === arr[j]) {
                result.push(2 * arr[i]);
                zeroCount++;  // One number gets merged, reducing space by 1
                i = j + 1;    // Skip both merged numbers
            } else {
                result.push(arr[i]);
                i = j;        // Move to the next number
            }
        }

        // Fill the rest with zeros
        while (result.length < n) {
            result.push(0);
        }

        return result;
    }
}
