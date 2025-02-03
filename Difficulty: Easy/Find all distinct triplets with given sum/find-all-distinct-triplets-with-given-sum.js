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
        let res = obj.threeSum(arr, k);
        res = res.sort((a, b) => a[0] - b[0]);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        }
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                process.stdout.write(res[i][j] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    /**
     * @param {number[]} arr
     * @param {number} target
     * @return {number[][]}
     */
    threeSum(arr, target) {
        // Sort the array to use two-pointer technique
        arr.sort((a, b) => a - b);
        const result = [];
        
        // Loop through the array to find all triplets
        for (let i = 0; i < arr.length - 2; i++) {
            // Skip duplicate elements to avoid repeated triplets
            if (i > 0 && arr[i] === arr[i - 1]) continue;
            
            // Initialize the left and right pointers
            let left = i + 1, right = arr.length - 1;
            
            // Use two-pointer approach to find pairs that sum up with arr[i]
            while (left < right) {
                const sum = arr[i] + arr[left] + arr[right];
                
                if (sum === target) {
                    // If the sum matches the target, add the triplet to the result
                    result.push([arr[i], arr[left], arr[right]]);
                    
                    // Skip duplicate elements to avoid repeated triplets
                    while (left < right && arr[left] === arr[left + 1]) left++;
                    while (left < right && arr[right] === arr[right - 1]) right--;
                    
                    // Move both pointers inward
                    left++;
                    right--;
                } else if (sum < target) {
                    // If the sum is less than the target, move the left pointer to the right
                    left++;
                } else {
                    // If the sum is greater than the target, move the right pointer to the left
                    right--;
                }
            }
        }
        
        // Return the result containing all the triplets
        return result;
    }
}
