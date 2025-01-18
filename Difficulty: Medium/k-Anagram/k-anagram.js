//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let input_ar1 = readLine().split(' ');
        let str1 = readLine();
        let str2 = readLine();
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.areKAnagrams(str1, str2, k);
        if (res === true) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
} // }

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str1
 * @param {string} str2
 * @param {number} k
 * @returns {boolean}
 */
class Solution {
    areKAnagrams(s1, s2, k) {
        // Step 1: If lengths of s1 and s2 are not equal, return false
        if (s1.length !== s2.length) {
            return false;
        }

        // Step 2: Count the frequency of characters in both strings
        let freq1 = new Array(26).fill(0);
        let freq2 = new Array(26).fill(0);
        
        // Populate frequency arrays
        for (let i = 0; i < s1.length; i++) {
            freq1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            freq2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        // Step 3: Calculate the number of changes needed
        let changesNeeded = 0;
        
        for (let i = 0; i < 26; i++) {
            // If freq1[i] > freq2[i], this means there are excess characters in s1
            changesNeeded += Math.max(0, freq1[i] - freq2[i]);
        }

        // Step 4: If the number of changes needed is less than or equal to k, return true, otherwise false
        return changesNeeded <= k;
    }
}
