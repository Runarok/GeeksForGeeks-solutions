//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let l = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.findMinTime(n, l, arr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} l
 * @param {number[]} arr
 * @returns {number}
*/

class Solution {
    // Function to check if it's possible to paint all boards within a given time (mid)
    isPosible(n, l, arr, mid){
        let count = 0; // To keep track of how many boards we can paint
        for (let i = 0; i < l; i++) {
            let c = 0; // Counter for the boards painted by the current worker
            let time = mid; // Available time for this worker
            let takenTime = arr[i]; // Time taken to paint the current board

            // Try to paint as many boards as possible within the given time (mid)
            while(time > 0){
                time = time - takenTime; // Reduce time based on board painting time
                if (time >= 0) {
                    c++; // Increment the counter if the board is successfully painted
                    takenTime = takenTime + arr[i]; // Increase the time for the next board (because each board takes longer)
                }
            }
            count += c; // Add the number of boards painted by this worker
            if (count >= n) { // If we have painted enough boards, return true
                return true;
            }
        }
    }

    // Function to find the minimum time required to paint all the boards using binary search
    findMinTime2(n, l, arr) {
        let minTime; // Variable to store the minimum time required
        let s = 0, e = arr[l-1] * (n * ((n + 1) / 2)); // Initializing the search range

        // Perform binary search to find the minimum time
        while (s <= e) {
            let mid = Math.floor((s + e) / 2); // Calculate the mid time value
            if (this.isPosible(n, l, arr, mid)) { // If it's possible to paint all boards within 'mid' time
                minTime = mid; // Set the minimum time to 'mid'
                e = mid - 1; // Try to find a smaller possible time
            } else {
                s = mid + 1; // If it's not possible, increase the search range
            }
        }
        return minTime; // Return the found minimum time
    }

    // Function to find the minimum time using a brute force approach (not optimized)
    findMinTime(n, l, arr) {
        let minTime; // Variable to store the minimum time required
        let s = 0, e = arr[l - 1] * (n * ((n + 1) / 2)); // Initializing the search range

        // Brute force approach to check each time from 1 to 'e'
        for (let i = 1; i <= e; i++) {
            let mid = i; // Setting mid to the current time being checked
            if (this.isPosible(n, l, arr, mid)) { // If it's possible to paint all boards within 'mid' time
                minTime = mid; // Set the minimum time to 'mid'
                e = mid - 1; // Try to find a smaller possible time
                return minTime; // Return the found minimum time immediately
            } else {
                s = mid + 1; // If it's not possible, increase the search range
            }
        }
        return minTime; // Return the found minimum time
    }
}
