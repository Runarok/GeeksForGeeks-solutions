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
        let ans = obj.KMPSearch(pat, txt);
        console.log(ans==true?"Yes":"No");
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * computeLPSArray
 * @param {string} pat
 * @param {number} M
 * @param {number[]} lps
 * 
 * 
 * KMPSearch
 * @param {string} pat
 * @param {string} txt
 * @returns {boolean}
*/

class Solution {
    // Function to fill lps[] for the given pattern pat[0..M-1].
    computeLPSArray(pat, M, lps) {
        let len = 0;  // length of the previous longest prefix suffix
        lps[0] = 0;   // lps[0] is always 0
        let i = 1;
        
        // Calculate lps[i] for i = 1 to M-1
        while (i < M) {
            if (pat[i] === pat[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1]; // try the previous prefix suffix
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
    }
    
    // Function to check if the pattern exists in the string or not.
    KMPSearch(pat, txt) {
        let M = pat.length;
        let N = txt.length;
        
        // Create lps[] that will hold the longest prefix suffix values for pattern
        let lps = new Array(M);
        this.computeLPSArray(pat, M, lps);
        
        let i = 0;  // index for txt[]
        let j = 0;  // index for pat[]
        
        while (i < N) {
            if (pat[j] === txt[i]) {
                i++;
                j++;
            }
            
            if (j === M) {
                // Pattern found at index (i - j)
                return true;
            }
            
            // mismatch after j matches
            else if (i < N && pat[j] !== txt[i]) {
                // Do not match lps[0..lps[j-1]] characters, we can safely skip
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        
        // Pattern not found
        return false;
    }
}
