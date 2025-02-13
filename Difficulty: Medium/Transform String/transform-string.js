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
        let [A,B] = readLine().trim().split(" ");
        
        let obj = new Solution();
        let res = obj.transform(A, B);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {String} A
 * @param {String} B
 * @returns {number}
 */

class Solution{
    transform(A, B){
        // Check if both strings have the same length
        if(A.length !== B.length){
            return -1; // Return -1 if lengths are not equal
        }

        let i = A.length - 1; // Start from the last character of string A
        let j = i; // Set j to the same position in string B
        let tempStr = ""; // String to hold characters removed from A

        // Traverse both strings from the end to the start
        while(i >= 0){
            if(A[i] === B[j]){
                // If characters match, move both pointers one step backward
                i--;
                j--;
            } else {
                // If characters do not match, append the character from A to tempStr
                tempStr += A[i];
                i--; // Move pointer in string A backward
            }
        }

        // Create a map to store the frequency of characters in tempStr
        let charMap = new Map();
        for(let i = 0; i < tempStr.length; i++){
            // Count the frequency of each character in tempStr
            if(charMap.has(tempStr[i])){
                charMap.set(tempStr[i], charMap.get(tempStr[i]) + 1);
            } else {
                charMap.set(tempStr[i], 1);
            }
        }

        // Iterate over string B to remove matching characters found in tempStr
        for(let i = 0; i <= j; i++){
            if(charMap.has(B[i])){
                // If character exists in map, decrease its frequency or remove it
                if(charMap.get(B[i]) > 1){
                    charMap.set(B[i], charMap.get(B[i]) - 1);
                } else {
                    charMap.delete(B[i]);
                }
            }
        }

        // If the map is not empty, return -1, meaning transformation is not possible
        // Otherwise, return the length of tempStr (number of operations required)
        return charMap.size ? -1 : tempStr.length;
    }
}
