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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.maxProduct(arr);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript  

/**  
 * @param {number[]} numbers  
 * @returns {number}  
 */  

class Solution {  
    maxProduct(numbers) {  
        // Code starts here  
        let length = numbers.length;  
        if (length < 3) return -1; // Not enough elements  

        let largest1 = -Infinity, largest2 = -Infinity, largest3 = -Infinity;  
        let smallest1 = Infinity, smallest2 = Infinity;  

        // Single pass to determine the three largest and two smallest numbers  
        for (let value of numbers) {  
            // Update the three largest values  
            if (value > largest1) {  
                largest3 = largest2;  
                largest2 = largest1;  
                largest1 = value;  
            } else if (value > largest2) {  
                largest3 = largest2;  
                largest2 = value;  
            } else if (value > largest3) {  
                largest3 = value;  
            }  

            // Update the two smallest values  
            if (value < smallest1) {  
                smallest2 = smallest1;  
                smallest1 = value;  
            } else if (value < smallest2) {  
                smallest2 = value;  
            }  
        }  

        // Maximum of (product of three largest) OR (product of two smallest and largest)  
        return Math.max(largest1 * largest2 * largest3, smallest1 * smallest2 * largest1);  
    }  
}  
