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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let txt = readLine();
        let pat = readLine();
        let obj = new Solution();
        let res = obj.search(txt, pat);
        if (res)
            console.log("true");
        else
            console.log("false");
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    search(txt, pat) {
        let n = txt.length, m = pat.length;

        if (m > n) return false;

        // Frequency arrays for both pattern and window in text
        let patFreq = new Array(26).fill(0);
        let windowFreq = new Array(26).fill(0);

        // Precompute frequency for pattern
        for (let i = 0; i < m; i++) {
            patFreq[pat.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            windowFreq[txt.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        // Function to check if two frequency arrays are equal
        function areSame(freq1, freq2) {
            for (let i = 0; i < 26; i++) {
                if (freq1[i] !== freq2[i]) return false;
            }
            return true;
        }

        // Check initial window
        if (areSame(patFreq, windowFreq)) return true;

        // Slide window across txt
        for (let i = m; i < n; i++) {
            // Add new character
            windowFreq[txt.charCodeAt(i) - 'a'.charCodeAt(0)]++;

            // Remove old character
            windowFreq[txt.charCodeAt(i - m) - 'a'.charCodeAt(0)]--;

            // Compare current window frequency with pattern frequency
            if (areSame(patFreq, windowFreq)) return true;
        }

        return false;
    }
}
