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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let string = readLine();
        
        let obj = new Solution();
        let ans = obj.caseSort(string, n);
        
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    caseSort(str, n) {
        // Create arrays to store uppercase and lowercase characters
        let uppercase = [];
        let lowercase = [];
        
        // Separate the characters into uppercase and lowercase arrays
        for (let i = 0; i < n; i++) {
            if (str[i] >= 'A' && str[i] <= 'Z') {
                uppercase.push(str[i]); // Add uppercase to uppercase array
            } else {
                lowercase.push(str[i]); // Add lowercase to lowercase array
            }
        }
        
        // Sort both uppercase and lowercase arrays
        uppercase.sort();
        lowercase.sort();
        
        // Initialize an empty result string
        let result = '';
        let upperindex = 0;
        let lowerindex = 0;
        
        // Reconstruct the string with sorted uppercase and lowercase characters
        for (let i = 0; i < n; i++) {
            if (str[i] >= 'A' && str[i] <= 'Z') {
                result += uppercase[upperindex++]; // Append sorted uppercase character
            } else {
                result += lowercase[lowerindex++]; // Append sorted lowercase character
            }
        }
        
        return result; // Return the resulting sorted string
    }
}
