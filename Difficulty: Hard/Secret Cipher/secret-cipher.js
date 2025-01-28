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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.compress(s);
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    compress(s) {
        let n = s.length;
        let lps = new Array(n).fill(-1);
        lps[0] = 0;
        let i = 0;
        let j = 1;
        
        // Build the LPS array using a similar pattern to KMP algorithm
        while (i < n && j < n) {
            if (s[i] === s[j]) {
                lps[j] = i + 1;
                i++;
                j++;
            } else {
                if (i > 0) {
                    i = lps[i - 1];
                } else {
                    lps[j] = 0;
                    j++;
                }
            }
        }
        
        let encrypt = [];
        i = n - 1;
        
        // Perform the encryption process
        while (i >= 0) {
            if (i % 2 === 0) {
                encrypt.push(s[i]);
                i--;
            } else {
                if (lps[i] === Math.floor((i + 1) / 2)) {
                    encrypt.push('*');
                    i = Math.floor(i / 2);
                } else {
                    if (lps[i] > Math.floor((i + 1) / 2) && (i + 1) % (2 * (i + 1 - lps[i])) === 0) {
                        encrypt.push('*');
                        i = Math.floor(i / 2);
                    } else {
                        encrypt.push(s[i]);
                        i--;
                    }
                }
            }
        }
        
        // Build the final encrypted string
        let ans = '';
        while (encrypt.length > 0) {
            ans += encrypt.pop();
        }
        
        return ans;
    }
}
