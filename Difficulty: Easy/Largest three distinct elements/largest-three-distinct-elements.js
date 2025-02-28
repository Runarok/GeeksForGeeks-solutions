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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = input_line.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();
        let ans = obj.getThreeLargest(arr);
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            if (Number.isInteger(ans[i]))
                s = s + ans[i] + " ";
            else
                s = s + "No" +
                    " ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to print the 3 largest elements in an array.
    getThreeLargest(arr) {
        // Initialize variables for the largest, second largest, and third largest elements
        let large = -Infinity;
        let secLarge = -Infinity;
        let thirdLarge = -Infinity;
        
        // Result array to hold the 3 largest elements
        let res = [];
        
        // Iterate through the array to find the 3 largest elements
        arr.forEach(a => {
            if (a > large) {
                // Update all three variables if current element is larger than the largest
                thirdLarge = secLarge;
                secLarge = large;
                large = a;
            }
            else if (a !== large && a > secLarge) {
                // Update second largest if current element is not equal to the largest but larger than second largest
                thirdLarge = secLarge;
                secLarge = a;
            }
            else if (a !== large && a !== secLarge && a > thirdLarge) {
                // Update third largest if the current element is distinct and larger than third largest
                thirdLarge = a;
            }
        });
        
        // Add the largest elements to the result array if they were updated from -Infinity
        if (large !== -Infinity) res.push(large);
        if (secLarge !== -Infinity) res.push(secLarge);
        if (thirdLarge !== -Infinity) res.push(thirdLarge);
        
        // Return the result array with the top 3 largest elements
        return res;
    }
}
