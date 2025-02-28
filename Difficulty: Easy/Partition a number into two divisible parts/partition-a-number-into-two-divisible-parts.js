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
        let [str,a,b]=readLine().trim().split(" ");
        a = parseInt(a);
        b = parseInt(b);
        let obj = new Solution();
        let res = obj.stringPartition(str,a,b);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S 
 * @param {number} a 
 * @param {number} b 
 * @returns {string}
*/
class Solution {
    // Function to partition a string such that every substring of the partition is divisible by either 'a' or 'b'.
    stringPartition(S, a, b) {
        // Initializing div_a to store the first partition value.
        let divA = 0;

        // Initializing div_b to store the second partition value.
        let divB = Number(S);

        // Loop through the string to find a valid partition.
        for (let index = 0; index < S.length - 1; index++) {
            // Build the first partition number digit by digit.
            divA = divA * 10 + Number(S.charAt(index));
            
            // The second partition is the remaining substring converted to number.
            divB = Number(S.substring(index + 1));

            // Check if both partitions are divisible by 'a' and 'b' respectively.
            if (divA % a === 0 && divB % b === 0) {
                // Return the partitioned string.
                return S.substring(0, index + 1) + " " + S.substring(index + 1);
            }
        }

        // If no valid partition is found, return "-1".
        return "-1";
    }
}
