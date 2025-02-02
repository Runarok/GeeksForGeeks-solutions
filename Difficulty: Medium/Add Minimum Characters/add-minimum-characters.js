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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.addMinChar(str);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} str1
 * @returns {string}
*/

class Solution {
    /**
     * Function to add minimum number of characters to the end 
     * of the given string such that it becomes a palindrome.
     * @param {string} str1 - The input string.
     * @returns {string} - The minimum number of characters to add.
     */
    addMinChar(str1) {
        // Helper function to check if a given string is a palindrome
        const isPalindrome = (s) => {
            let left = 0;
            let right = s.length - 1;
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        };

        // Iterate over the string, checking progressively shorter substrings
        for (let i = 0; i < str1.length; i++) {
            // Slice the string to check the substring from the beginning to the end - i
            let substring = str1.slice(0, str1.length - i);
            
            // If the substring is a palindrome, return how many characters are left
            if (isPalindrome(substring)) {
                return str1.length - substring.length;
            }
        }
        
        // If no palindrome is found, at least 1 character must be added
        return 1;
    }
}
