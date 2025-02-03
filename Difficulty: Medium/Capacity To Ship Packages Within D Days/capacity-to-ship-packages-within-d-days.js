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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let d = parseInt(readLine());
        let obj = new Solution();
        let res = obj.leastWeightCapacity(arr, n, d);
        console.log(res);
    
console.log("~");
}
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} d
 * @returns {number}
 */

class Solution {
    // Function to find the minimum weight capacity required for the ship
    leastWeightCapacity(arr, n, d) {
        // Initialize max and sum to track the range of the ship's capacity
        let max = 0, sum = 0;
        
        // Calculate the max weight and total sum of the array
        arr.forEach((element) => {
            max = Math.max(element, max);
            sum += element;
        });

        // Start binary search between max (the minimum capacity) and sum (the maximum possible capacity)
        let low = max;
        let high = sum;
        let ans = -1;
        
        // Binary search to find the minimum weight capacity
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2); // Calculate the mid capacity
            let days = this.calculateDays(mid, arr); // Calculate days required for mid capacity
            
            // If the days required is less than or equal to d, then this is a valid capacity
            if (days <= d) {
                high = mid - 1; // Try to find a smaller capacity
                ans = mid; // Update the answer
            } else {
                low = mid + 1; // If it takes more than d days, increase capacity
            }
        }
        return ans; // Return the minimum required capacity
    }

    // Function to calculate the number of days required for a given ship capacity
    calculateDays(cc, arr) {
        let days = 1; // Start from day 1
        let addedWeight = 0; // Track the total weight added to the ship on current day

        // Loop through the array to distribute the weights
        for (let i = 0; i < arr.length; i++) {
            // If adding the next weight exceeds the capacity, ship it on the next day
            if (addedWeight + arr[i] > cc) {
                days++; // Increment days
                addedWeight = arr[i]; // Start new day with the current weight
            } else {
                addedWeight += arr[i]; // Otherwise, add the weight to the current day
            }
        }
        return days; // Return the total days required
    }
}
