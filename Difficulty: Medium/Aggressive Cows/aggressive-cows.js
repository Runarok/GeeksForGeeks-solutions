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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.aggressiveCows(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} stalls
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to solve the problem of placing aggressive cows
    aggressiveCows(stalls, k) {
        // Sort the stalls in ascending order
        stalls = stalls.sort((a, b) => a - b);
        
        // Set the search range for the minimum distance between cows
        let low = 1;
        let high = stalls[stalls.length - 1] - stalls[0];
        let ans = -1;
        
        // Use binary search to find the maximum minimum distance
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);  // Mid distance between cows
            let canWePlace = this.canWePlace(stalls, mid, k);  // Check if we can place cows
            
            // If we can place cows with the current mid distance, try for a larger distance
            if (canWePlace) {
                low = mid + 1;
                ans = mid;
            } else {
                high = mid - 1;  // Otherwise, try for a smaller distance
            }
        }
        
        return high;  // Return the maximum minimum distance
    }
    
    // Helper function to check if we can place cows with the given distance
    canWePlace(stalls, interval, noOfCows) {
        let currentCowsPlaced = 1;  // Place the first cow at the first stall
        let lastPlacedCow = stalls[0];  // Track the position of the last placed cow

        // Loop through the stalls to check if we can place the remaining cows
        for (let i = 1; i < stalls.length; i++) {
            if (stalls[i] - lastPlacedCow >= interval) {  // If the distance is sufficient
                currentCowsPlaced++;  // Place a cow
                lastPlacedCow = stalls[i];  // Update the last placed cow's position
            }

            // If we've placed all cows, return true
            if (currentCowsPlaced >= noOfCows) {
                return true;
            }
        }

        return false;  // If we can't place all cows, return false
    }
}
