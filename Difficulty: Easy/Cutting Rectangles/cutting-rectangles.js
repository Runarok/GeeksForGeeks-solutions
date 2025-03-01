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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let L = parseInt(input_line[0]);
        let B = parseInt(input_line[1]);
        
        let obj = new Solution();
        let [N,K] = obj.minimumSquares(L,B);
        
        let ans = N+" "+K;
        console.log(ans);
    
console.log("~");
}
}


// } Driver Code Ends

class Solution {
    // Function to find the minimum number of squares that can fit inside a rectangle
    minimumSquares(L, B) {
        // Function to find the Greatest Common Divisor (GCD) of two numbers
        function gcd(a, b) {
            // Base case: If b is 0, return a as the GCD
            if (b === 0) return a;
            // Recursively call gcd with b and the remainder of a divided by b
            return gcd(b, a % b);
        }

        // Find the side length of the largest square that can fit
        let K = gcd(L, B);

        // Calculate the number of such squares that can fit in the rectangle
        let N = (L * B) / (K * K);

        // Return the result as an array containing the number of squares and the side length of the square
        return [N, K];
    }
}
