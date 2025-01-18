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
        // let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.threeSumClosest(A, key);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} target
 * @returns {Number}
 */

class Solution {
    threeSumClosest(arr, target) {
        // Sort the array first
        arr.sort((a, b) => a - b);
        
        let closestSum = Infinity; // Variable to store the closest sum
        let n = arr.length;
        
        // Iterate through the array, considering each element as the base
        for (let i = 0; i < n - 2; i++) {
            let left = i + 1; // Left pointer starts just after the base element
            let right = n - 1; // Right pointer starts from the end
            
            // While there are at least two elements to check
            while (left < right) {
                const currentSum = arr[i] + arr[left] + arr[right];
                
                // If the current sum is closer to the target, update the closest sum
                if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                    closestSum = currentSum;
                }
                // If sums are equally close, take the maximum
                else if (Math.abs(currentSum - target) === Math.abs(closestSum - target)) {
                    closestSum = Math.max(closestSum, currentSum);
                }
                
                // Move the pointers based on the sum
                if (currentSum < target) {
                    left++; // Move left pointer to the right to increase sum
                } else if (currentSum > target) {
                    right--; // Move right pointer to the left to decrease sum
                } else {
                    // If we find an exact match, return the sum
                    return currentSum;
                }
            }
        }
        
        return closestSum;
    }
}
