//{ Driver Code Starts
//Initial Template for javascript

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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar0[0];
        let b = input_ar0[1];
        
        let obj = new Solution();
        if(obj.solve(a, b)) {
            console.log("Dolly");
        }
        else {
            console.log("Bunty");
        }
        
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    solve(a, b) {
        // Ensure that A is the smaller and B is the larger value
        let A = a, B = b;
        if (A > B) {
            [A, B] = [B, A];  // Swap A and B if A is greater
        }

        // Calculate the difference between B and A
        const k = B - A;  
        
        // Golden ratio value
        const goldenRatio = (1 + Math.sqrt(5)) / 2;  

        // Calculate the value of C using the golden ratio
        const C = Math.floor(goldenRatio * k);  

        // Return 0 if A is equal to C, else return 1
        return (A === C) ? 0 : 1;  
    }
}
