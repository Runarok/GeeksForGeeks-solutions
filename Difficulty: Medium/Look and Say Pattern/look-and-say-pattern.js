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
        let n = parseInt(readLine());
        let obj = new Solution();
        let ans=obj.lookandsay(n);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
 */
class Solution {
    
    lookandsay(n)
    {
        // Calls the helper function to generate the nth term in the Look-and-Say sequence
        return lookAndSay(n);
        
        // Helper function to generate the Look-and-Say sequence
        function lookAndSay(n) {
            // Base case: if n is 1, return the first term "1"
            if (n === 1) return "1";
            
            // Recursively get the previous term (n-1)
            let previousTerm = lookAndSay(n - 1);
            // Initialize an empty string to store the result
            let currentTerm = "";
            // Count variable to track the frequency of digits in the previous term
            let digitCount = 1;
            
            // Iterate through the previous term starting from the second character
            for (let i = 1; i < previousTerm.length; i++) {
                // If the current character is the same as the previous one, increment the count
                if (previousTerm[i] === previousTerm[i - 1]) {
                    digitCount++;
                } else {
                    // If the characters are different, append the count and the previous digit to the result
                    currentTerm += digitCount + previousTerm[i - 1];
                    // Reset the count for the new digit
                    digitCount = 1;
                }
            }
            
            // After the loop, append the count and the last character of the previous term
            currentTerm += digitCount + previousTerm[previousTerm.length - 1];
            
            // Return the generated current term
            return currentTerm;
        }
    }
}
