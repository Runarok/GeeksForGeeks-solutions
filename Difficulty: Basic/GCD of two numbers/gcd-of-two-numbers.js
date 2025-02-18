//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let a = parseInt(readLine());
        
        
        let b = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.gcd(a, b);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * Function to compute the greatest common divisor (GCD) of two numbers.
    * @param {number} a - First number.
    * @param {number} b - Second number.
    * @returns {number} - The greatest common divisor of a and b.
    */
    gcd(a, b) {
        // Base case: if b is 0, return a as the GCD
        if (b === 0) {
            return a;
        }
        // Recursively call gcd to apply Euclidean algorithm
        return this.gcd(b, a % b);
    }
}
