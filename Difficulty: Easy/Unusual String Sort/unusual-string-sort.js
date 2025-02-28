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
        let str = readLine().trim();
        let obj = new Solution();
        console.log(obj.stringSort(str));
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/

class Solution
{
    //Function to sort the characters of a string in alphabetical order.
    stringSort(s)
    {
        // Helper function to separate, sort, and merge uppercase and lowercase characters
        function stringSortIn(s) {
            let upperCaseChars = '';
            let lowerCaseChars = '';

            // Separate uppercase and lowercase characters
            for (let i = 0; i < s.length; i++) {
                if (s[i] >= 'A' && s[i] <= 'Z') {
                    upperCaseChars += s[i];
                } 
                else if (s[i] >= 'a' && s[i] <= 'z') {
                    lowerCaseChars += s[i];
                }
            }

            // Convert to arrays and sort both
            let lowerCaseArr = [...lowerCaseChars].sort();
            let upperCaseArr = [...upperCaseChars].sort();

            // Combine the sorted characters, maintaining alternating order if possible
            const maxLength = Math.max(lowerCaseArr.length, upperCaseArr.length);

            let result = '';
            for (let i = 0; i < maxLength; i++) {
                if (upperCaseArr[i]) result += upperCaseArr[i];
                if (lowerCaseArr[i]) result += lowerCaseArr[i];
            }

            return result;
        }

        // Return the result of the helper function
        return stringSortIn(s);
    }
}
