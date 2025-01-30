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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.maxSweetness(arr, n, k));
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} sweetness
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    // Function to find the maximum sweetness level that can be obtained.
    maxSweetness(sweetness, n, k) {
        // Helper function to check if we can divide the sweetness into at least k+1 pieces
        // such that each piece has a sweetness of at least minSweetness.
        function canDivide(sweetness, k, minSweetness) {
            let currentSweetness = 0;
            let pieces = 0;
            
            // Traverse through the sweetness array and try to partition it.
            for (let sweet of sweetness) {
                currentSweetness += sweet;  // Add sweetness of the current item.
                
                // If the accumulated sweetness meets or exceeds the target minimum sweetness.
                if (currentSweetness >= minSweetness) {
                    pieces++;  // Increment the number of pieces.
                    currentSweetness = 0;  // Reset current sweetness for the next piece.
                }
            }
            
            // Return true if we can form at least k + 1 pieces, else false.
            return pieces >= k + 1;
        }

        // Set initial search bounds:
        let low = Math.min(...sweetness);  // The minimum possible sweetness.
        let high = sweetness.reduce((acc, sweet) => acc + sweet, 0);  // The total sum of sweetness.
        let result = low;  // To store the maximum possible sweetness level.

        // Perform binary search to find the maximum sweetness that satisfies the condition.
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);  // Middle value for binary search.
            
            // If we can divide the sweetness into k + 1 pieces with the current minimum sweetness.
            if (canDivide(sweetness, k, mid)) {
                result = mid;  // Update the result to the current mid value.
                low = mid + 1;  // Try for a larger sweetness.
            } else {
                high = mid - 1;  // Try for a smaller sweetness.
            }
        }

        // Return the result which is the maximum possible minimum sweetness level.
        return result;
    }
}
