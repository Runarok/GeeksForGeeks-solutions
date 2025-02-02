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
        let N = parseInt(readLine());
        let obj = new Solution();
        obj.toBinary(N);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to convert a number to its binary representation
    toBinary(N){
        var t = N, r = 0, arr = [], k = 1, p = 0;
        
        // While the number is not zero
        while (t !== 0) {
            // Get the remainder when dividing by 2 (this gives us the binary digits)
            r = t % 2;
            // Push the binary digit into the array
            arr.push(r);
            // Update the binary number in decimal form as we build it (p holds the result)
            p = p + r * k;
            // Multiply by 10 to shift the place value (moving to the next digit)
            k = k * 10;
            // Divide the number by 2 and take the floor to get the next bit
            t = Math.floor(t / 2);
        }

        // Print the result as the binary number in decimal form
        console.log(p)
    }
}
