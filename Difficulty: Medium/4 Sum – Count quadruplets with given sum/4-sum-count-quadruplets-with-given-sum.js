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
        let arr = readLine().split(" ");
        for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countSum(arr, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to count the number of pairs in the array such that their sum equals the target
    countSum(arr, target) {
        let n = arr.length, count = 0;
        
        // A map to store the frequency of sum values
        let sumMap = new Map();

        // Iterate through the array for every pair
        for (let i = 0; i < n - 1; i++) {
            // Check pairs starting from index i+1 onwards
            for (let j = i + 1; j < n; j++) {
                let sum = arr[i] + arr[j];
                
                // If the difference between target and current sum exists in the map, increment count
                if (sumMap.has(target - sum)) {
                    count += sumMap.get(target - sum);
                }
            }

            // Now consider the current number 'arr[i]' and all previous numbers for sum tracking
            for (let j = 0; j < i; j++) {
                let sum = arr[i] + arr[j];
                
                // Update the map with the frequency of this sum
                sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
            }
        }
        
        // Return the total count of such pairs
        return count;
    }
}
