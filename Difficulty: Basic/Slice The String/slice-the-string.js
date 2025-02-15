//{ Driver Code Starts
// Initial Template for javascript

function main() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    });

    let count = 0;
    rl.on("line", function(line) {
        if (count === 0) {
            count = Number(line.trim());
        } else if (count > 0) {
            const s = line.trim();
            console.log(sliceString(s));
            console.log("~");
            count--;
        }
        if (count === 0) rl.close();
    });
}

main();

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s
 * @returns {string}
 */

function sliceString(s) {
    // Extract the substring by removing the first and last character
    let slicedText = s.slice(1, s.length - 1);
    
    // Return the modified string
    return slicedText;
}
