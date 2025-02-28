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
        let res = obj.waysToSplit(S);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    // Function to find the number of ways to split the string.
    waysToSplit(S) {
        // Frequency array to store count of each character (26 lowercase letters).
        let characterFrequency = new Array(26).fill(0);

        // Counting frequency of each character in the string.
        for (let i = 0; i < S.length; i++) {
            characterFrequency[S.charCodeAt(i) - 97] += 1;
        }

        // Setting the frequency of the first character to 1 (mandatory split at the start).
        characterFrequency[S.charCodeAt(0) - 97] = 1;

        // Result variable to store the final product of frequencies.
        let numberOfWays = 1;

        // Calculating product of frequencies of all characters present in the string.
        for (let i = 0; i < 26; i++) {
            if (characterFrequency[i]) {
                numberOfWays *= characterFrequency[i];
            }
            // Taking modulo to prevent overflow.
            numberOfWays %= 1000000007;
        }

        return numberOfWays;
    }
}
