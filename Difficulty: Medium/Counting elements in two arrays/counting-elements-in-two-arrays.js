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

/* Function to print an array */
function printArray(arr, size) {
    let s = '';
    for (let i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s.trim());
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));

        // Create a new Solution object and call the countEleLessThanOrEqual function
        let obj = new Solution();
        let res = obj.countEleLessThanOrEqual(a, b);

        // Print the result array
        printArray(res, res.length);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} a
 * @param {Number[]} b
 * @returns {number[]}
 */

class Solution {
    countEleLessThanOrEqual(a, b) {
        // Sort the array b in ascending order
        b.sort((a, b) => a - b);
        
        // Initialize the result array with zeroes
        let res = new Array(a.length).fill(0);
        
        // Loop through each element in array a
        for(let i = 0; i < a.length; i++) {
            const n = a[i];
            
            // Find the count of elements in b that are less than or equal to n
            res[i] = this.findCount(b, n);
        }
        return res;
    }
    
    // Helper function to find the count of elements <= value using binary search
    findCount(arr, value) {
        let low = 0, high = arr.length - 1;
        let count = -1;
        
        // Binary search to find the count
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);
            if(arr[mid] <= value) {
                count = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        // Return the count (adjusted for 0-based index)
        return count == -1 ? 0 : count + 1; 
    }
}
