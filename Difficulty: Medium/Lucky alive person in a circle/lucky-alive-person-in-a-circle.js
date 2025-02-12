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

function printList(res, res_size) {
    let s="";
    for(let i=0;i<res_size;i++){
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
        let res = obj.find(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to find the value of x^n.
    find(N) {
        // Iterate to find the closest power of 2 to N
        for (let i = 0; i < N; i++) {
            // Check if 2^i equals N
            if (2 ** i === N) {
                return 1; // Return 1 if N is a power of 2
            }
            // If 2^i exceeds N, calculate the difference
            else if (2 ** i > N) {
                let diff = N - 2 ** (i - 1); // Difference from the previous power of 2
                return diff * 2 + 1; // Return the calculated value
            }
        }
    }
}
