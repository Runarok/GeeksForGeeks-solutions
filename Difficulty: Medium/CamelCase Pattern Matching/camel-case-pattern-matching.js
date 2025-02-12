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

        let arr = [];
        let input_ar1 = readLine().split(" ");
        for (let ii = 0; ii < input_ar1.length; ii++) {
            arr[ii] = input_ar1[ii];
        }

        let pat = readLine();

        let obj = new Solution();
        let res = obj.camelCase(arr, pat);
        res.sort();

        let S = "";
        if (res.length === 0) {
            console.log("[]");
        } else {
            for (let ii = 0; ii < res.length; ii++) {
                S += res[ii];
                S += " ";
            }
            console.log(S);
        }
    }
}

// } Driver Code Ends

class Solution {
    /**
    * Function to find all words in camelCase dictionary that match the given pattern.
    * @param {string[]} arr - List of dictionary words.
    * @param {string} pat - The camel case pattern to match against.
    * @returns {string[]} - List of words matching the given pattern.
    */
    camelCase(arr, pat) {
        const ans = [];

        /**
        * Helper function to check if a word matches the camel case pattern.
        * @param {string} s - The word to check.
        * @param {string} pattern - The camel case pattern.
        * @returns {boolean} - True if the word matches the pattern, false otherwise.
        */
        function check(s, pattern) {
            let j = 0;
            const n = s.length;
            const m = pattern.length;
            
            // Iterate over each character in the word
            for (let i = 0; i < n; i++) {
                // If current character matches the pattern, move to the next character in the pattern
                if (s[i] === pattern[j]) {
                    j++;
                }
                // If current character is uppercase and doesn't match the pattern, return false
                else if (s[i].toUpperCase() === s[i] && j !== m) {
                    return false;
                }
            }
            // Return true if pattern is fully matched
            return j === m;
        }

        // Iterate over the dictionary words and check if they match the pattern
        for (const word of arr) {
            if (check(word, pat)) {
                ans.push(word);
            }
        }
        return ans;  // Return the list of matching words
    }
}
