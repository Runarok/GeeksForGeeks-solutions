//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    const solution = new Solution();
    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine());
        const k = parseInt(readLine());
        console.log(solution.binaryPalindrome(n, k));
        console.log("~")
    }
}

// } Driver Code Ends

class Solution {
    /**
    * Function to generate a binary palindrome of length n with 1s at specific intervals.
    * @param {number} n - The length of the binary string
    * @param {number} k - The interval at which 1s will be placed
    * @returns {string} - The generated binary palindrome
    */
    binaryPalindrome(n, k) {
        // If n is 1, return the string '1'
        if (n === 1) return '1';
        
        let bin = '1'; // Start with the first 1
        
        // Add zeros in the middle for the rest of the length
        for (let i = 1; i < n - 1; i++) bin += '0';
        
        bin += '1'; // End with 1 to form a palindrome
        
        // Add 1s at intervals of k
        for (let i = k; i < n; i += k) {
            // Modify the string to insert 1s symmetrically
            bin = bin.substring(0, i) + '1' + bin.substring(i + 1);
            bin = bin.substring(0, bin.length - i - 1) + '1' + bin.substring(bin.length - i);
        }
        
        return bin; // Return the final palindrome
    }
}
