//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

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
        s += "\n";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let a = readLine();
        let a1 = parseInt(a);
        let b = readLine();
        let b1 = parseInt(b);
        let c = readLine();
        let c1 = parseInt(c);
        let obj = new Solution();
        let res = obj.checkValidity(a1, b1, c1);
        if (res === true) {
            console.log("Valid");
        } else {
            console.log("Invalid");
        }
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    // Function to check the validity of a triangle based on the sides a, b, and c.
    checkValidity(sideA, sideB, sideC) {
        // If the sum of any two sides is less than or equal to the third side, it is not a valid triangle
        if(sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA)
            return false; // Invalid triangle
        
        return true; // Valid triangle
    }
}
