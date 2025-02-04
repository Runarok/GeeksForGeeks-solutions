//{ Driver Code Starts
//Initial Template for javascript


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
        let [n,k] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let arr=readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.maximizeSum(arr,n,k);
        if(res == -0){
            res = 0;
        }
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number} 
 */

class Solution {
    maximizeSum(arr, n, k) {
        // Initialize the sum variable
        var sum = 0;
        // Pointer to track the position of the first negative number
        var l = 0;

        // Step 1: Sort the array in ascending order to handle negative numbers first
        arr.sort((a, b) => a - b);

        // Step 2: Flip the negative numbers to positive until we run out of flips or all negatives are handled
        while (k > 0 && arr[l] < 0 && l < arr.length) {
            arr[l] = -1 * arr[l];  // Flip the negative number to positive
            k--;  // Decrease the flip count
            l++;  // Move to the next number
        }

        // Step 3: Calculate the sum of the array after flipping
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        // Step 4: If flips are still remaining
        arr.sort((a, b) => a - b); // Sort the array again to handle the smallest element in case flips are remaining
        if (k > 0) {
            // If there is an odd number of flips left, flip the smallest element (which is now the first element in sorted array)
            if (k % 2 !== 0) {
                if (l >= arr.length) {
                    l = 0; // If all elements are flipped, start over at the smallest element
                }
                sum -= 2 * arr[0]; // Subtract twice the smallest element, as it was added earlier and we need to flip it
            }
            k--; // Decrease remaining flips
        }

        // Return the final sum after maximizing
        return sum;
    }
}
