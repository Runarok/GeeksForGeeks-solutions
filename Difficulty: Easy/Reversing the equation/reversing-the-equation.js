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
    for (; i < t; i++) {
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.reverseEqn(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {string} s
 * @return {string}
 */
class Solution {
    reverseEqn(answer) {
        let s = answer.split('');
        let firstResult = '';
        let secondResult = '';

        // Function to check if the character is a symbol (+, -, *, /)
        function isSymbol(c) {
            return c === '+' || c === '-' || c === '*' || c === '/';
        }

        let left = 0;
        let right = s.length - 1;
        let leftNumber = '';
        let rightNumber = '';

        // Traverse the equation from both ends
        while (left <= right) {
            if (isSymbol(s[left]) && isSymbol(s[right])) {
                // If both are symbols, process accordingly
                if (left === right)
                    firstResult = firstResult + rightNumber;
                else
                    firstResult = firstResult + rightNumber + s[right];
                
                secondResult = s[left] + leftNumber + secondResult;

                left++;
                right--;

                // Reset numbers for the next segment
                leftNumber = '';
                rightNumber = '';
            } else if (!isSymbol(s[left])) {
                // Add numbers from the left side
                leftNumber += s[left];
                left++;
            } else if (!isSymbol(s[right])) {
                // Add numbers from the right side
                rightNumber = s[right] + rightNumber;
                right--;
            } else {
                // If both sides have characters, append accordingly
                leftNumber += s[left];
                rightNumber += s[right];
                right--;
                left++;
            }
        }

        // If there are remaining numbers, append them to the result
        if (Boolean(leftNumber) || Boolean(rightNumber)) {
            return firstResult + leftNumber + rightNumber + secondResult;
        }

        return firstResult + secondResult;
    }
}
