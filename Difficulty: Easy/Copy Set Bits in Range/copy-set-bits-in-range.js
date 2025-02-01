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
        let input_line = readLine().split(' ');
        let x = parseInt(input_line[0]);
        let y = parseInt(input_line[1]);
        let l = parseInt(input_line[2]);
        let r = parseInt(input_line[3]);
        let obj = new Solution();
        let ans = obj.setSetBit(x, y, l, r); 
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    // Function to set the bits in 'x' based on the set bits in 'y' within the range [l, r]
    setSetBit(x, y, l, r) {
        // Helper function to check if the kth bit in n is set
        function get(n, k) {
            return n & (1 << k);
        }

        // Helper function to toggle the kth bit in n
        function sett(n, k) {
            return n ^ (1 << k);
        }

        // Iterate through the range from l-1 to r (0-indexed)
        for (let i = l - 1; i < r; i++) {
            const a = get(y, i); // Get the ith bit of y
            const b = get(x, i); // Get the ith bit of x

            // If the bit is set in y and not in x, toggle the bit in x
            if (a !== 0) {
                if (b === 0) {
                    x = sett(x, i);
                }
            }
        }

        // Return the modified x
        return x;
    }
}
