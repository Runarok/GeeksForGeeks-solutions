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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findSingle(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**

 * @param {number[]} arr
 * @returns {number}
*/

class Solution {
    /**
     * Function to find the element that appears only once in the array.
     * All other elements appear an even number of times.
     * @param {number[]} arr - The input array containing elements.
     * @returns {number} - The element that appears only once in the array.
     */
    findSingle(arr) {
        const map = new Map(); // Map to store the frequency of each element
        const n = arr.length;  // Get the length of the array
        
        // Iterate through the array to populate the frequency map
        for (let i = 0; i < n; i++) {
            const item = arr[i];
            // If the item exists in the map, increment its count; otherwise, set it to 1
            map.set(item, map.get(item) ? map.get(item) + 1 : 1);
        }
        
        // Iterate through the array again to find the element with an odd count
        for (let i = 0; i < n; i++) {
            const item = arr[i];
            // Return the element whose frequency is odd
            if (map.get(item) % 2 !== 0) {
                return item;
            }
        }
    }
}
