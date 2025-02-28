//{ Driver Code Starts
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.pallan(arr);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    pallan(n) {
        // Convert the number to a string for easy digit access
        const str = n.toString();
        
        // Initialize sum of digits and an empty substring
        let sum = 0, substr = '';
        
        // Loop through each digit in the number string
        for (let i = 0; i < str.length; i++) {
            // Convert character to numeric digit
            const digit = parseInt(str[i]);
            
            // Add digit to the sum
            sum += digit;
            
            // Convert the digit to a corresponding character (0 -> 'a', 1 -> 'b', ...)
            substr += String.fromCharCode('a'.charCodeAt(0) + digit);
        }
        
        // Build a repeated string from substr until its length equals 'sum'
        let repeatedStr = '';
        while (repeatedStr.length < sum) {
            repeatedStr += substr;
        }
        
        // Slice to exactly match the required length (in case it overflows)
        repeatedStr = repeatedStr.slice(0, sum);
        
        // Check if the constructed string is a palindrome
        const len = repeatedStr.length;
        for (let i = 0; i < len / 2; i++) {
            if (repeatedStr[i] !== repeatedStr[len - 1 - i]) {
                return false;
            }
        }
        
        // If the string passes the palindrome check, return true
        return true;
    }
}
