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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let S = readLine();
        let obj = new Solution();
        let res = obj.LargestSwap(S);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {boolean}
*/
class Solution {
    LargestSwap(N) {
        let digits = N.split('');
        let maxDigitPosition = Array(10).fill(-1); // Tracks the last position of each digit (0-9)

        // Record the last occurrence position for each digit in the number
        for (let i = 0; i < digits.length; i++) {
            maxDigitPosition[digits[i]] = i;
        }

        let swapLeftIndex = -1;
        let swapRightIndex = -1;

        // Scan each digit from left to right
        for (let i = 0; i < digits.length; i++) {
            // Check for any larger digit (9 down to current digit + 1) that occurs later
            for (let largerDigit = 9; largerDigit > digits[i]; largerDigit--) {
                if (maxDigitPosition[largerDigit] > i) {
                    // Found a larger digit at a later position - mark this as a potential swap
                    swapLeftIndex = i;
                    swapRightIndex = maxDigitPosition[largerDigit];
                    break;
                }
            }
            if (swapLeftIndex !== -1) break; // Exit if we already found a valid swap
        }

        // Perform the swap if a suitable pair was found
        if (swapLeftIndex !== -1) {
            [digits[swapLeftIndex], digits[swapRightIndex]] = [digits[swapRightIndex], digits[swapLeftIndex]];
        }

        // Join digits back into a string and return
        return digits.join('');
    }
}
