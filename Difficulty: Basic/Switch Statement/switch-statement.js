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
        let a = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.utility(a));
    }
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to convert a number to its corresponding word representation
    utility(number) {
        // Using switch statement to match the number and return the corresponding word
        switch(number) {
            case 1: 
                return 'One';   // Return 'One' for input 1
            case 2:
                return 'Two';   // Return 'Two' for input 2
            case 3: 
                return 'Three'; // Return 'Three' for input 3
            case 4:
                return 'Four';  // Return 'Four' for input 4
            case 5: 
                return 'Five';  // Return 'Five' for input 5
            case 6:
                return 'Six';   // Return 'Six' for input 6
            case 7: 
                return 'Seven'; // Return 'Seven' for input 7
            case 8:
                return 'Eight'; // Return 'Eight' for input 8
            case 9: 
                return 'Nine';  // Return 'Nine' for input 9
            default:
                return 'Unknown'; // Return 'Unknown' if number is not in the range 1 to 9
        }
    }
}
