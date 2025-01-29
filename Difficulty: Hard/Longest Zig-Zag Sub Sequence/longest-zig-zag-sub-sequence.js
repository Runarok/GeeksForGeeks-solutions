//{ Driver Code Starts
// Initial Template for javascript

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
        let nums = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            nums[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.ZigZagMaxLength(nums));
        
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} nums - The input array
 * @returns {number} - The length of the longest zig-zag (even-odd) subsequence
*/

class Solution {
    // Function to find the length of the longest subsequence following an even-odd pattern
    ZigZagMaxLength(nums) {
        if (nums.length === 0) return 0;

        let prev = nums[0]; // Initialize with the first element
        let count = 1; // At least one element is counted
        let i = 1;

        // Skip initial repeating values (handle edge cases)
        while (i < nums.length && nums[i] === prev) {
            prev = nums[i];
            i++;   
        }

        // If the whole array consists of the same number, return 1
        if (i === nums.length) return count;

        // Determine the initial direction of the pattern
        let up = nums[i] > prev; 
        count++; // Count this as a valid transition
        prev = nums[i];
        i++;

        // Traverse the rest of the array to count valid zig-zag transitions
        while (i < nums.length) {
            if (up) {
                if (nums[i] < prev) { // Transition from increasing to decreasing
                    up = false;
                    count++;
                }
            } else {
                if (nums[i] > prev) { // Transition from decreasing to increasing
                    up = true;
                    count++;
                }
            }

            // Move to the next element
            prev = nums[i];
            i++;    
        }

        return count;
    }
}
