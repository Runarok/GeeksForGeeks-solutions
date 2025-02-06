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
        let res = obj.noConseBits(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    noConseBits(n) {
        // Array to store the binary representation of the number (32-bit)
        let binaryBits = new Array(32).fill(0);
        
        // Convert the integer into a binary array representation
        for (let i = 31; i >= 0; i--) {
            if ((n & (1 << (31 - i))) !== 0) {
                binaryBits[i] = 1;
            }
        }
        
        let modifiedNumber = 0;

        // Traverse the binary array, ensuring no three consecutive 1s
        for (let i = 0; i <= 29; i++) {
            if (binaryBits[i] === 1) {
                modifiedNumber += (1 << (31 - i)); // Add the corresponding power of 2
                
                // If two consecutive 1s are found, ensure the third bit is set to 0
                if (binaryBits[i + 1] === 1) {
                    binaryBits[i + 2] = 0;
                }
            }
        }
        
        // Add the last two bits if they are set
        if (binaryBits[30] === 1) {
            modifiedNumber += 2;
        }
        if (binaryBits[31] === 1) {
            modifiedNumber += 1;
        }
        
        return modifiedNumber;
    }
}
