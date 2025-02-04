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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.AllPossibleStrings(s);
        let outs = "";
        for(let it of res){
            outs+=it+" ";
        }
        console.log(outs);
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {string[]}
*/

class Solution {
    AllPossibleStrings(s) {
        // Helper function to generate all possible substrings using recursion
        const solve = (ip, op, ans) => {
            // Base case: If input string is empty, append the current output string
            if (ip.length === 0) {
                if (op !== "") { // Avoid adding empty string
                    ans.push(op);
                }
                return;
            }
            // Two choices: Include or exclude the first character of the input string
            let op1 = op;
            let op2 = op + ip[0];
            let ip1 = ip.slice(1);  // Rest of the input string
            
            // Recur with both choices
            solve(ip1, op1, ans);  // Exclude the character
            solve(ip1, op2, ans);  // Include the character
        };

        let ans = [];
        solve(s, "", ans);  // Start recursion with the input string and an empty output string
        ans.sort();  // Sort the results lexicographically
        return ans;
    }
}
