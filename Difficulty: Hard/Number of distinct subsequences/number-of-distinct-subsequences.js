//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        let str = readLine();
        let obj = new Solution();
        let res = obj.distinctSubsequences(str);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * This function calculates the number of distinct subsequences in a given string.
    *
    * @param string str - The input string.
    * @returns number - The total number of distinct subsequences.
    */
    distinctSubsequences(str) {
        // If the string has only one character, there are 2 distinct subsequences: the character itself and the empty string.
        if (str.length === 1) {
            return 2;
        } else {
            let mod = 10 ** 9 + 7;  // Modulo value to prevent overflow.
            let dp = new Array(str.length).fill(0);  // Array to store the number of distinct subsequences up to each index.
            dp[0] = 1;  // Initialize the base case (one subsequence for an empty string).
            
            // Array to track the last occurrence index of each character ('a' to 'z').
            let hMap = new Array(26).fill(-1);
            
            // Iterate over the string to compute the distinct subsequences.
            for (let i = 1; i <= str.length; i++) {
                let charCode = str[i - 1].charCodeAt(0) - 97;  // Get the character index ('a' = 0, 'b' = 1, ..., 'z' = 25).
                let pIndex = hMap[charCode];  // Get the previous occurrence index of the character.
                
                // Double the subsequences count from the previous index.
                dp[i] = (dp[i - 1] * 2) % mod;
                
                // If the character has appeared before, subtract the subsequences count up to the previous occurrence.
                if (pIndex !== -1) {
                    dp[i] = (dp[i] - dp[pIndex - 1] + mod) % mod;
                }
                
                // Update the last occurrence of the current character.
                hMap[charCode] = i;
            }
            
            // Return the total number of distinct subsequences modulo mod.
            return (dp[str.length] + mod) % mod;
        }
    }
}
