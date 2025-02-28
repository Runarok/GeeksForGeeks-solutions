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
        let [S,T] = readLine().trim().split(" ");
        let M = S.length;
        let N = T.length;
        let obj = new Solution();
        let res = obj.isItPossible(S,T,M,N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} S
 * @param {string} T
 * @param {number} M
 * @param {number} N
 * @returns {boolean}
*/

class Solution {
    // Function to check whether it is possible to transform string S into string T.
    isItPossible(S, T, M, N) {
        // If the lengths of the strings do not match, transformation is impossible.
        if (M !== N) {
            return 0;
        }

        // Initialize pointers for both strings.
        let sPointer = 0, tPointer = 0;

        // Traverse both strings.
        while (sPointer < M && tPointer < N) {
            // Skip all '#' characters in S.
            while (sPointer < M && S[sPointer] === '#') {
                sPointer++;
            }

            // Skip all '#' characters in T.
            while (tPointer < N && T[tPointer] === '#') {
                tPointer++;
            }

            // If both pointers reach the end simultaneously, transformation is possible.
            if (sPointer === M && tPointer === N) {
                return 1;
            }

            // If one pointer reaches the end but the other does not, transformation is impossible.
            if ((sPointer === M) !== (tPointer === N)) {
                return 0;
            }

            // If characters do not match at the current position, transformation is impossible.
            if (S[sPointer] !== T[tPointer]) {
                return 0;
            }

            // If character 'A' is being moved to the right (which is invalid), return 0.
            if (S[sPointer] === 'A' && sPointer < tPointer) {
                return 0;
            }

            // If character 'B' is being moved to the left (which is invalid), return 0.
            if (S[sPointer] === 'B' && sPointer > tPointer) {
                return 0;
            }

            // Move both pointers forward.
            sPointer++;
            tPointer++;
        }

        // If all checks pass, transformation is possible.
        return 1;
    }
}
