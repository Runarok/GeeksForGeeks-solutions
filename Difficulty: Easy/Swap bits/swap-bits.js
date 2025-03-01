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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let X = parseInt(input_line[0]);
        let P1  = parseInt(input_line[1]);
        let P2  = parseInt(input_line[2]);
        let N = parseInt(input_line[3]);
        
        let obj = new Solution();
        let ans = obj.swapBits(X, P1,P2,N);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} X - The number in which bits will be swapped.
 * @param {number} P1 - Starting position of the first set of bits.
 * @param {number} P2 - Starting position of the second set of bits.
 * @param {number} N - Number of bits to be swapped.
 * @returns {number} - The modified number after swapping bits.
 */

class Solution {
    // Function to swap N bits between position P1 and position P2.
    swapBits(X, P1, P2, N) {
        // Iterate over each bit pair to be swapped.
        for (let bitOffset = 0; bitOffset < N; bitOffset++) {
            // Calculate the actual bit positions for the current bit.
            let bitPosition1 = P1 + bitOffset;
            let bitPosition2 = P2 + bitOffset;

            // Create bit masks to isolate the bits at these positions.
            let mask1 = 1 << bitPosition1;
            let mask2 = 1 << bitPosition2;

            // Extract the actual bit values at these positions.
            let bitAtP1 = X & mask1;
            let bitAtP2 = X & mask2;

            // Check if the bits are different (only swap if different).
            let bitsAreDifferent = (bitAtP1 > 0) !== (bitAtP2 > 0);

            // If the bits are different, flip both bits to swap them.
            if (bitsAreDifferent) {
                X = X ^ (mask1 | mask2);
            }
        }

        // Return the final number after swapping.
        return X;
    }
}
