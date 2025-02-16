//{ Driver Code Starts
// Initial Template for javascript

function main() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    });

    let t;
    rl.on("line", function(line) {
        if (!t) {
            t = Number(line);
        } else {
            const ob = new Solution();
            const ans = ob.reverseString(line);
            console.log(ans);
            console.log("~");
            if (--t === 0) rl.close();
        }
    });
}

main();

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s - Input string
 * @returns {string} - Reversed string
 */

class Solution {
    reverseString(s) {
        // Splitting the string into an array, reversing it, and joining it back
        return s.split("").reverse().join("");
    }
}
