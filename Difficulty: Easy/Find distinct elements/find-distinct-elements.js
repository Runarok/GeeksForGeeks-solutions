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
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        console.log(distinct(arr));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
function distinct(arr) {
    // Create a Set to store unique elements
    const arraySet = new Set();
    
    // Iterate through the array and add each element to the Set
    for (const ele of arr) {
        arraySet.add(ele);
    }
    
    // Return the size of the Set, which represents the number of distinct elements
    return arraySet.size;
}
