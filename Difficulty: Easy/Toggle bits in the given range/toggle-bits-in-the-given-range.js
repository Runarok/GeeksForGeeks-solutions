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

        let [n,l,r] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.toggleBits(n,l,r);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
*/

class Solution {
    toggleBits(n, l, r) {
        // Convert the number to a binary string, remove the "0b" prefix
        let binaryNum = n.toString(2).split('');

        // Toggle the bits from position l to r (1-based indexing)
        for (let j = l; j <= r; j++) {
            let index = binaryNum.length - j;
            
            // Only toggle bits that are within the bounds of the current binary number length
            if (index >= 0) {
                binaryNum[index] = (binaryNum[index] === '0') ? '1' : '0';
            }
        }

        // Join the array back into a string, convert it back to a number
        let finalBin = binaryNum.join('');
        let result = parseInt(finalBin, 2);
        
        return result;
    }
}
