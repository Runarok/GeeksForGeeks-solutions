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
        let res = obj.maxSubstring(S);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} S
 * @returns {number}
 */

class Solution{
    // Function to find the maximum difference in the substring by treating '0' as +1 and '1' as -1
    maxSubstring(S){
        // Initialize maxDiff to track the maximum difference and currSum for the current sum
        let maxDiff = -1, currSum = 0;

        // Iterate through the string to calculate the maximum possible difference
        for (let i = 0; i < S.length; i++) {
            // Add 1 for '0' and subtract 1 for '1'
            currSum += (S[i] === '0') ? 1 : -1;

            // Update the maximum difference if the current sum is greater
            maxDiff = Math.max(maxDiff, currSum);

            // If the current sum becomes negative, reset it to 0
            if (currSum < 0) currSum = 0;
        }

        // Return the maximum difference found
        return maxDiff;
    }
}
