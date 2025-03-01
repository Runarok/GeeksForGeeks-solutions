//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let N = parseInt(input_line[0]);

        let arr = new Array(N);

        input_line = readLine().split(' ');
        for (let i = 0; i < N; i++) {
            arr[i] = parseInt(input_line[i]);
        }

        input_line = readLine().split(' ');
        let sum = input_line[0];

        let obj = new Solution();
        let ans = obj.sumExists(arr, N, sum);
        if (ans == -0) ans = 0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} sum
 * @returns {number}
 */
class Solution {
    // Function to check if there is a pair with the given sum in the array.
    sumExists(arr, N, sum) {
        // Check if the array length matches the expected N
        if (arr.length !== N) {
            return 0;  // Return 0 if the array length is not as expected
        }
        
        let map = new Map();  // Initialize a map to store the elements
        
        // Iterate through the array
        for (let num of arr) {
            const partner = sum - num;  // Calculate the partner value that would sum to the target
            
            // Check if the partner value has been encountered before
            if (map.has(partner)) {
                return 1;  // Return 1 if the pair is found
            } else {
                map.set(num, true);  // Otherwise, add the current number to the map
            }
        }
        
        return 0;  // Return 0 if no such pair is found
    }
}
