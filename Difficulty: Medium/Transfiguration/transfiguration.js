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
        let [A,B] = readLine().trim().split(" ");
        let obj = new Solution();
        let res = obj.transfigure(A,B);
        if(res === -0)
            res = 0;
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
*/

class Solution {

    // Function to check if string A can be transformed into string B by transpositions
    transfigure(A, B) {
        // Get the lengths of the strings A and B
        let n = A.length;
        let m = B.length;

        // If lengths are not equal, return -1 as transformation is not possible
        if (n !== m) {
            return -1;
        }

        // Create frequency maps to store the count of characters in both strings
        let map1 = new Map();
        let map2 = new Map();

        // Count the frequency of each character in string A
        for (let char of A) {
            map1.set(char, (map1.get(char) || 0) + 1);
        }

        // Count the frequency of each character in string B
        for (let char of B) {
            map2.set(char, (map2.get(char) || 0) + 1);
        }

        // Compare the frequencies of characters in both strings
        for (let [char, freq] of map1) {
            if (freq !== map2.get(char)) {
                return -1;  // If frequencies do not match, transformation is not possible
            }
        }

        // Initialize pointers for both strings, starting from the last character
        let i = n - 1;
        let j = m - 1;
        let count = 0;

        // Compare the strings from the end to the beginning
        while (i >= 0) {
            if (A[i] === B[j]) {
                // If characters match, move both pointers left
                i--;
                j--;
            } else {
                // If characters do not match, increment the count (indicating a required transposition)
                count++;
                i--;
            }
        }

        // Return the total number of transpositions required
        return count;
    }
}
