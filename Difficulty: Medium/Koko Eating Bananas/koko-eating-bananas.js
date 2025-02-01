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
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.kokoEat(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
    }
}

// } Driver Code Ends

class Solution {
    kokoEat(arr, k) {
        // Function to check if the current speed can finish within 'k' hours
        function check(arr, mid, k) {
            let totalHours = 0;

            // Calculate total hours needed for the current eating speed
            for (let bananas of arr) {
                totalHours += Math.floor(bananas / mid);  // Full hours for current speed
                if (bananas % mid !== 0) {
                    totalHours += 1;  // Additional hour for leftover bananas
                }
            }

            // Return true if the total hours are within the allowed limit
            return totalHours <= k;
        }

        // Set the initial search bounds: min speed of 1 banana/hour, max speed is the largest banana count
        let low = 1;
        let high = Math.max(...arr);
        let result = high;

        // Perform binary search to find the optimal speed
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            
            // Check if the current mid speed works
            if (check(arr, mid, k)) {
                high = mid - 1;
                result = mid;  // Store the valid speed
            } else {
                low = mid + 1;
            }
        }

        // Return the result which is the optimal eating speed
        return result;
    }
}
