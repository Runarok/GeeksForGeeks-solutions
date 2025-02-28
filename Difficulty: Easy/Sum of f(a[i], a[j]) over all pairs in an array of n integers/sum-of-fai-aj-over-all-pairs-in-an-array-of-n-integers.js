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
        let obj = new Solution();
        console.log(obj.sum(arr));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    // Function for finding the sum
    sum(arr) {
        // Create a map to store the frequency of each element
        let cnt = new Map();

        let ans = 0, pre_sum = 0;

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // Update the answer by adding the weighted difference between the current index and the sum of previous elements
            ans += (i * arr[i]) - pre_sum;
            pre_sum += arr[i]; // Update the cumulative sum up to the current index

            // If the current element - 1 exists in the map, subtract its count from the answer
            if (cnt.has(arr[i] - 1)) {
                ans -= cnt.get(arr[i] - 1);
            }

            // If the current element + 1 exists in the map, add its count to the answer
            if (cnt.has(arr[i] + 1)) {
                ans += cnt.get(arr[i] + 1);
            }

            // Update the frequency of the current element in the map
            cnt.set(arr[i], (cnt.get(arr[i]) || 0) + 1);
        }

        // Return the calculated sum
        return ans;
    }
}
