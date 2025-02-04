//{ Driver Code Starts
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
        const n = parseInt(readLine()); // Fixed: add readLine() to get input for n
        const r = parseInt(readLine()); // Fixed: add readLine() to get input for r
        let obj = new Solution();
        let res = obj.nCr(n, r);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} n
     * @param {number} r
     * @returns {number}
     */
    
    // Method to calculate nCr (Binomial Coefficient)
    nCr(n, r) {
        // If r is greater than n, return 0 as it is not a valid combination
        if (r > n) return 0;
        
        // If r is 0, the combination is always 1 (nC0 = 1)
        if (r === 0) return 1;
        
        // If r is 1 or r is n-1, the result is n (nC1 = n and nCn-1 = n)
        if (r === 1 || r === n - 1) return n;
        
        // Calculate the factorial of n, (n-r), and r
        let x = this.factorial(n);
        let y = this.factorial(n - r) * this.factorial(r);

        // Return the value of nCr by dividing factorial(n) by the product of factorial(n-r) and factorial(r)
        return Math.round(x / y);
    }
    
    // Method to calculate the factorial of a number
    factorial(n) {
        // Base case: 0! or 1! is 1
        if (n === 0 || n === 1) return 1;
        
        // Recursive case: n! = n * (n-1)!
        return n * this.factorial(n - 1);
    }
}
