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
        let obj = new Solution();
        let res=obj.isTriangular(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @returns {boolean}
*/

class Solution {
    // Function to check whether N is a triangular number or not.
    isTriangular(N) {
        let sum = 0;
        
        // Loop through numbers and keep adding them to the sum
        for (let i = 1; i <= N; i++) {
            sum = sum + i;
            
            // If the sum matches N, it is a triangular number
            if (sum === N) {
                return 1;
            }
            
            // If the sum exceeds N, it is not a triangular number
            else if (sum > N) {
                break;
            }
        }

        // If no match is found, return 0 indicating it's not a triangular number
        return 0;
    }
}
