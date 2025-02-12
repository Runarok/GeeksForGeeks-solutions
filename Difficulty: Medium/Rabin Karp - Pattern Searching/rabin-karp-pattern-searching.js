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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let txt = input_line[0];
        input_line = readLine().split(' ');
        let pat = input_line[0];
        let obj = new Solution();
        let q = 101;
        let ans = obj.search(pat, txt, q);
        console.log(ans==true?"Yes":"No");
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript
// d is the number of characters in the input alphabet 
let d = 256;

/**
 * @param {string} pat
 * @param {string} txt
 * @param {number} q (prime number)
 * @returns {boolean}
*/
class Solution {
    // Function to check if the pattern is present in string or not.
    search(P, S, q) {
        // Get the lengths of the string and pattern
        let m = S.length;
        let n = P.length;
        
        // Initialize hash values for pattern and string
        let pHash = 0, sHash = 0, h = 1;

        // If the pattern is longer than the string, return false
        if (n > m) return false;

        // Precompute the value of h = (d^(n-1)) % q
        for (let i = 0; i < n - 1; i++) {
            h = (h * d) % q;
        }

        // Calculate the hash value for the pattern and the first window of the string
        for (let i = 0; i < n; i++) {
            pHash = (d * pHash + P.charCodeAt(i)) % q;
            sHash = (d * sHash + S.charCodeAt(i)) % q;
        }

        // Slide the window over the string to find a match
        for (let i = 0; i <= m - n; i++) {
            // If the hash values match, check the actual characters
            if (pHash === sHash) {
                let j = 0;
                while (j < n && S[i + j] === P[j]) {
                    j++;
                }
                // If the entire pattern matches, return true
                if (j === n) return true;
            }

            // If this is not the last window, update the hash value for the next window
            if (i < m - n) {
                sHash = (d * (sHash - S.charCodeAt(i) * h) + S.charCodeAt(i + n)) % q;
                // Ensure the hash is positive
                if (sHash < 0) sHash += q;
            }
        }

        // Return false if no match is found
        return false;
    }
}
