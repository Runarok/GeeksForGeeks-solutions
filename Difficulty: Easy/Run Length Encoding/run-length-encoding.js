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

function printArray(res, n) {
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+="$";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.encode(str);
        console.log(res);
    
console.log("~");
}
}


// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} s
 * @returns {string} 
 */
 
class Solution {
    // Function to encode the given string using Run Length Encoding.
    encode(s) {
        let encodedArray = [];  // Array to store encoded characters and their counts.
        let count = 1;          // Counter to track consecutive character occurrences.

        for (let i = 0; i < s.length; i++) {
            if (s[i] === s[i + 1]) {
                count++;  // Increment count if current and next characters are the same.
            } else {
                // Push current character and its count to the encoded array.
                encodedArray.push(s[i] + count);
                count = 1;  // Reset count for the next character.
            }
        }
        
        return encodedArray.join('');  // Join array elements into the final encoded string.
    }
}
