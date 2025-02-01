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

        // let n = parseInt(readLine());
        let s = readLine();
        let obj = new Solution();
        let res = obj.CountPS(s);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {string} s - The input string to check for palindromes.
     * @returns {number} - The count of palindromic substrings of length >= 2 in the given string.
     */
    CountPS(s) {
        let count = 0; // Initialize the count for palindromic substrings.

        // Function to expand around the center and check for palindromes
        function expandAroundCenter(left, right) {
            // Expand outwards as long as the characters match and the indices are within bounds
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                // Check if the current palindrome has length >= 2
                if (right - left + 1 >= 2) {
                    count++; // Increment the count if a palindrome is found.
                }
                left--; // Move the left pointer to the left.
                right++; // Move the right pointer to the right.
            }
        }

        // Iterate through each character as a potential center of a palindrome
        for (let i = 0; i < s.length; i++) {
            // Check for odd-length palindromes (centered at a single character)
            expandAroundCenter(i, i);

            // Check for even-length palindromes (centered between two characters)
            expandAroundCenter(i, i + 1);
        }

        return count; // Return the final count of palindromic substrings.
    }
}
