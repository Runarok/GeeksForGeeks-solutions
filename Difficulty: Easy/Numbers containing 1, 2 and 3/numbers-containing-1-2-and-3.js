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

function printArray(arr, size) {
    let s = '';
    for (let i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let result = obj.filterByDigits(input_ar1);

        if (result.length === 0) {
            console.log("-1");
        } else {
            console.log(result.join(" "));
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to filter elements from array that contain only digits 1, 2, 3
    filterByDigits(arr) {
        // Helper function to check if the number consists only of digits 1, 2, 3
        const isValid = (num) => {
            // Convert number to string and check if every character is in the set {1, 2, 3}
            return num.toString().split('').every(digit => ['1', '2', '3'].includes(digit));
        };
        
        // Filter the array with the condition that each element should only contain digits 1, 2, or 3
        const result = arr.filter(isValid);
        
        // If the result array is empty, return [-1], otherwise return the filtered result
        return result.length === 0 ? [-1] : result;
    }
}