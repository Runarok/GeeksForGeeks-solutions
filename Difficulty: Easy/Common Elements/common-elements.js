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
        // let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let a = new Array(n);
        for (let i = 0; i < n; i++) {
            a[i] = input_ar1[i];
        }
        // let m = parseInt(readLine());
        input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let m = input_ar1.length;
        let b = new Array(m);
        for (let i = 0; i < m; i++) {
            b[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.commonElements(a, b);
        printList(res, res.length);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} a - First array
 * @param {number[]} b - Second array
 * @returns {number[]} - Array of common elements in both arrays
 */

class Solution {
    commonElements(a, b) {
        // Initialize an empty array to store the result
        const res = [];
        
        // Create a map to store the frequency of elements in the second array
        const mp = new Map();
        
        // Iterate through the second array and store element frequencies in the map
        for(let val of b){
            mp.set(val, mp.get(val) + 1 || 1);
        }
        
        // Iterate through the first array and check if the element is present in the map
        for(let i = 0; i < a.length; i++) {
            // If the element exists in the map and hasn't been used already
            if(mp.get(a[i]) > 0) {
                // Add the element to the result
                res.push(a[i]);
                // Decrement the frequency of that element in the map
                mp.set(a[i], mp.get(a[i]) - 1);
            }
        }
        
        // Sort the result array in ascending order before returning
        return res.sort((m, n) => m - n);
    }
}
