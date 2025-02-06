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
        let inputLine = readLine();
        let [L,R,X] = inputLine.trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.countX(L,R,X);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} L
 * @param {number} R
 * @param {number} X
 * @returns {number}
*/

class Solution {
    
    // Function to count the occurrences of digit 'targetDigit' in a given number 'num'.
    count(num, targetDigit) {
        let occurrenceCount = 0;

        // Checking each digit of 'num' one by one.
        while (num > 0) {
            if (num % 10 === targetDigit) {
                occurrenceCount++;
            }
            num = Math.floor(num / 10); // Removing the last digit of 'num'.
        }
        return occurrenceCount;
    }

    // Function to count the occurrences of digit 'targetDigit' in numbers between 'start' and 'end'.
    countX(start, end, targetDigit) {
        let totalOccurrences = 0;

        // Iterating through each number between 'start' and 'end'.
        for (let currentNumber = start + 1; currentNumber < end; currentNumber++) {

            // Counting the occurrences of 'targetDigit' in 'currentNumber'.
            totalOccurrences += this.count(currentNumber, targetDigit);
        }
        return totalOccurrences;
    }
}
