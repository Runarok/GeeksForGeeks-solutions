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
        let [m,n,k] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.kthCharacter(m,n,k);
        console.log(res);
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

class Solution {
    kthCharacter(m, n, k) {
        // Convert m to its binary representation
        let binaryM = this.toBinary(m);

        let i = 1, newM = "";
        // Perform n transformations
        while (i <= n) {
            let j = 0;
            while (j < binaryM.length) {
                // Replace '0' with "01" and '1' with "10"
                newM += binaryM[j] === '0' ? "01" : "10";
                j++;
            }
            binaryM = newM;
            newM = "";
            i++;
        }

        // Return the k-th character (1-based index)
        return binaryM[k - 1];
    }

    // Function to convert a number to its binary representation
    toBinary(m) {
        if (m === 0) return "0";
        let binaryStr = "";
        while (m > 0) {
            binaryStr += m % 2;
            m = Math.floor(m / 2);
        }
        return binaryStr.split("").reverse().join("");
    }
}
