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
        let str = readLine();
        let obj = new Solution();
        obj.printPattern(str);
    
console.log("~");
}
}// }



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} str
 * @returns {void}
 */

class Solution {
    printPattern(str) {
        let result = ''; // Stores the final pattern output
        let lastPattern = ''; // Stores the last generated pattern
        let mid = Math.floor(str.length / 2); // Find the middle index of the string

        for (let i = 0; i < str.length; i++) {
            let pattern = ''; // Initialize pattern for the current iteration

            if (i > mid) {
                // Construct pattern by appending characters from the beginning up to the current position
                for (let j = 0; j <= i - mid - 1; j++) {
                    pattern = lastPattern + str[j];
                }
                lastPattern = pattern; // Update last pattern
            } else {
                // Construct pattern using characters from the middle moving forward
                for (let j = mid; j <= mid + i; j++) {
                    pattern += str[j];
                }
                lastPattern = pattern; // Update last pattern
            }

            result += pattern + '$' + ' '; // Append pattern with '$' separator
        }

        console.log(result.trim()); // Print the final formatted pattern
    }
}
