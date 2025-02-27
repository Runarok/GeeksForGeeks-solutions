//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res) {
    let s = res.join(" ");
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        obj.sortIt(arr);
        printList(arr);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
 */

class Solution {
    sortIt(arr) {
        // Separate even and odd numbers into different arrays
        let evenNumbers = arr.filter(number => number % 2 === 0).sort((a, b) => a - b);
        let oddNumbers = arr.filter(number => number % 2 !== 0).sort((a, b) => b - a);
        
        let index = 0;

        // Place sorted odd numbers first in the original array
        for (let oddNumber of oddNumbers) {
            arr[index++] = oddNumber;
        }

        // Place sorted even numbers after odd numbers in the original array
        for (let evenNumber of evenNumbers) {
            arr[index++] = evenNumber;
        }

        return arr;
    }
}
