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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.pattern( n);
        printList(res, res.length)
    }
}// } Driver Code Ends





// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    pattern(n) {
        let result = [];  // Array to store the generated pattern
        
        // Recursive function to build the pattern
        function createPattern(currentValue, isDecreasing) {
            result.push(currentValue);  // Add current value to result array

            // Switch to increasing phase once value reaches zero or below
            if (isDecreasing && currentValue <= 0) {
                isDecreasing = false;
            }

            // Stop recursion when we return to the original number 'n'
            if (!isDecreasing && currentValue === n) {
                return;
            }

            // Update current value based on the phase
            if (isDecreasing) {
                currentValue -= 5;
            } else {
                currentValue += 5;
            }

            // Recursive call to continue building the pattern
            createPattern(currentValue, isDecreasing);
        }

        // Start pattern generation from 'n', with decreasing phase first
        createPattern(n, true);
        
        return result;
    }
}
