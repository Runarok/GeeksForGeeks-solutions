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
        let n = parseInt(readLine());

        let obj = new Solution();
        let ans = obj.reverseBits(n);
        let stringans = '';
        // print 32 bit ans in binary format
        for (let i = 31; i >= 0; i--) {
            stringans += ((ans & 1) ? '1' : '0');
            ans = ans >> 1;
        }
        // print reverse string ans js return 32 bit number in reverse form for some
        // reason
        for (let i = 31; i >= 0; i--) {
            process.stdout.write(stringans[i]);
        }
        process.stdout.write('\n');
        console.log('~');
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} n - The 32-bit unsigned integer whose bits are to be reversed.
 * @return {number} - The 32-bit unsigned integer with its bits reversed.
 */
class Solution {
    reverseBits(n) {
        let reversedBits = 0; // To store the result of the reversed bits.
        
        // Loop through all 32 bits of the input integer.
        for (let i = 0; i < 32; i++) {
            reversedBits <<= 1; // Shift the result to the left by 1 bit to make space for the next bit.
            
            // Extract the least significant bit from the current number and add it to the result.
            reversedBits |= (n & 1);
            
            // Right shift the input number by 1 to process the next bit in the next iteration.
            n >>= 1;
        }
        
        // Return the result as an unsigned 32-bit integer.
        return reversedBits >>> 0;
    }
}
