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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.minSprinkler(arr, n));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of sprinklers required to water the entire array
    minSprinkler(arr, N) {
        // Initialize an empty array to store the sprinkler coverage ranges
        let v = []
        
        // Loop through the input array to calculate the sprinkler coverage intervals
        for(let i = 0; i < N; i++) {
            if(arr[i] > -1) { // Only consider valid sprinklers
                // For each sprinkler, calculate the left and right coverage bounds
                v.push([i - arr[i], i + arr[i]])   
            }
        }
        
        // Sort the intervals based on the starting point of the coverage
        v.sort((a, b) => a[0] - b[0])
        
        // Initialize variables for tracking the farthest point watered, the current index, and the number of sprinklers used
        let maxR = 0, i = 0, res = 0;
        
        // Loop until the farthest point watered is greater than or equal to N
        while(maxR < N) {
            // If there are no more sprinklers that can extend coverage, return -1
            if(i >= v.length || v[i][0] > maxR) 
                return -1;
            
            // Track the current maximum right boundary that can be watered by the sprinklers
            let curM = v[i][1];
            
            // Continue to the next sprinklers if they start within the current range, and update the farthest coverage
            while(i + 1 < v.length && v[i + 1][0] <= maxR) {
                i++;
                curM = Math.max(curM, v[i][1]);
            }
            
            // If the current maximum coverage does not extend the watered range, return -1 (impossible to cover the range)
            if(curM < maxR)
                return -1;
            
            // Update the farthest point watered and increment the result (number of sprinklers used)
            maxR = curM + 1;
            res++;
            
            // Move to the next sprinkler
            i++;
        }
        
        // Return the minimum number of sprinklers required
        return res;
    }
}
