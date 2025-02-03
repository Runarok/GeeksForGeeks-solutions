//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.firstElement(n);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n
    * @returns {number}
    */
    firstElement(n) {
        // Return n for cases where n is 1 or 2
        if (n <= 2) {
            return n;
        }

        let f = 1;  // Initialize first number in the sequence
        let s = 1;  // Initialize second number in the sequence
        let t;      // Temporary variable for the next number in the sequence

        // Calculate the nth number in the sequence
        for (let i = 3; i <= n; i++) {
            t = (f + s) % 1000000007;  // Calculate next number modulo 1000000007
            f = s;  // Update f to the previous s
            s = t;  // Update s to the newly calculated t
        }

        return t;  // Return the nth element
    }
}
