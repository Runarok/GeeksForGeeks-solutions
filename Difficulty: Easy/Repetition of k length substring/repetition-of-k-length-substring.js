//{ Driver Code Starts
//Initial Template for javascript

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
        let s = readLine();
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.checkString(s, k);
        if(res === true){
            console.log(1);
        }
        else{
            console.log(0);
        }
        
    
console.log("~");
}
}// } Driver Code Ends





// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} s
 * @param {number} k
 * @returns {boolean}
*/

class Solution {
    checkString(s, k) {
        // Map to count frequency of each substring of length k
        const substringCount = new Map();

        // If the string length is not divisible by k, it can't be evenly split
        if (s.length % k !== 0) return false;

        // Iterate over the string in chunks of length k
        for (let i = 0; i < s.length; i += k) {
            const chunk = s.slice(i, i + k);

            // Count occurrences of each chunk
            if (substringCount.has(chunk)) {
                substringCount.set(chunk, substringCount.get(chunk) + 1);
            } else {
                substringCount.set(chunk, 1);
            }
        }

        // If all chunks are identical, return true
        if (substringCount.size === 1) return true;

        // If exactly two distinct chunks exist, check if one occurs exactly once
        if (substringCount.size === 2) {
            for (const count of substringCount.values()) {
                if (count === 1) {
                    return true;
                }
            }
        }

        // Otherwise, the condition is not met
        return false;
    }
}
