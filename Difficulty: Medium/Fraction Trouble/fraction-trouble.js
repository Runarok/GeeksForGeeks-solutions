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
        let n = input_ar0[0];
        let d = input_ar0[1];
        
        let obj = new Solution();
        let arr = obj.LargestFraction(n, d);
        let ans = "";
        for(let element of arr) ans += element + " ";
        
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

class Solution {
     // Function to calculate the GCD of two numbers
     gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        
        // Ensure a is the larger number for the GCD calculation
        if (b > a) {
            var temp = a;
            a = b;
            b = temp;
        }
        
        // Use the Euclidean algorithm to find the GCD
        while (true) {
            if (b === 0) return a;  // If b is 0, a is the GCD
            a %= b;  // Reduce a by remainder of a divided by b
            if (a === 0) return b;  // If a is 0, b is the GCD
            b %= a;  // Reduce b by remainder of b divided by a
        }
    }
    
    // Function to find the largest fraction with numerator n and denominator d
    LargestFraction(n, d) {
        let r = 0, s = 1;  // Initialize result as a fraction 0/1
        let limit = 10000;  // Set a limit for the denominator q
        
        // Iterate through possible values of q from the limit down to 2
        for (let q = limit; q >= 2; q--) {
            // Calculate the numerator p for the fraction p/q
            let p = Math.floor((n * q - 1) / d);
            
            // Check if the fraction p/q is larger than the current best fraction r/s
            if (p * s >= r * q) {
                s = q;  // Update the denominator
                r = p;  // Update the numerator
            }
        }
        
        // Find the GCD of r and s to simplify the fraction
        let D = this.gcd(r, s);
        let res = [];
        
        // Add the simplified numerator and denominator to the result array
        res.push(Math.floor(r / D));
        res.push(Math.floor(s / D));
        
        return res;  // Return the simplified fraction
    }
}
