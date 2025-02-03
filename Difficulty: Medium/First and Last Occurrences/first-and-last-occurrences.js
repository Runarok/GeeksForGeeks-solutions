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
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.find(arr, x);
        let s = "";
        for (let it of res) {
            s += it + " ";
        }
        console.log(s);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number[]}
 */

class Solution {
    // Function to find the first and last occurrence of x in the array
    find(arr, x) {
        let i = 0;  // Pointer for the start of the array
        let j = arr.length - 1;  // Pointer for the end of the array
        
        // Loop until both pointers cross
        while (i <= j) {
            // If the current element at i is less than x, move i forward
            if (arr[i] < x) {
                i++;
            }
            // If the current element at j is greater than x, move j backward
            else if (arr[j] > x) {
                j--;
            }
            // If both arr[i] and arr[j] are equal to x, return their indices
            else if (arr[i] == x && arr[j] == x) {
                return [i, j];
            }
        }

        // If no occurrences of x were found, return [-1, -1]
        return [-1, -1];
    }
}
