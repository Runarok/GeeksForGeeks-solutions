//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.closestPairSum(arr, k);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        } else {
            for (let i = 0; i < res.length; i++) {
                process.stdout.write(res[i] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
class Solution {
    closestPairSum(arr, target) {
        // Sorting the array to enable the two-pointer approach
        arr.sort((a, b) => a - b);
        
        // Initializing pointers and variables for closest sum and pair
        let left = 0, right = arr.length - 1, closestSum = Infinity, bestPair = [];
        
        // Iterate to find the closest pair sum
        while (left < right) {
            const currSum = arr[left] + arr[right];
            const currDiff = Math.abs(currSum - target);
            
            // If the current sum is closer to the target or if a better pair is found
            if (currDiff < Math.abs(closestSum - target) ||
            (currDiff === Math.abs(closestSum - target) &&
            Math.abs(arr[left] - arr[right]) > Math.abs(bestPair[0] - bestPair[1]))) {
                closestSum = currSum;
                bestPair = [arr[left], arr[right]];
            }
            
            // Move the pointers to adjust the sum
            if (currSum < target) left++;
            else right--;
        }
        
        // Return the closest pair or an empty array if no pair found
        return bestPair.length > 0 ? bestPair : [];
    }
}
