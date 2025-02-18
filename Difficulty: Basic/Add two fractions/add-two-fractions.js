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
        let [num1,den1,num2,den2] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.addFraction(num1,den1,num2,den2);
        console.log(res[0] + '/' + res[1]);
    
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} num1
 * @param {number} den1
 * @param {number} num2
 * @param {number} den2
 * @return {number[]}
*/

class Solution {
    
    // Function to find the greatest common divisor of two numbers
    gcd(a, b) {
        if (a === 0) return b;  // Base case: if a is 0, return b
        return this.gcd(b % a, a);  // Recursive call with the remainder of b divided by a
    }

    // Function to reduce the fraction to its lowest terms
    lowest(den3, num3) {
        // Find the greatest common divisor of the numerator and denominator
        let commonFactor = this.gcd(den3, num3);
        // Divide both the numerator and denominator by the common factor to simplify
        den3 = parseInt(den3 / commonFactor);
        num3 = parseInt(num3 / commonFactor);
        return [den3, num3];  // Return the reduced fraction
    }

    // Function to add two fractions and return the result as a simplified fraction
    addFraction(num1, den1, num2, den2) {
        // Find the greatest common divisor of the denominators
        let gcdDen = this.gcd(den1, den2);
        // Calculate the least common denominator (LCD)
        let den3 = (den1 * den2) / gcdDen;
        // Calculate the new numerator by adjusting both numerators to the LCD
        let num3 = (num1 * (den3 / den1)) + (num2 * (den3 / den2));
        // Simplify the resulting fraction to its lowest terms
        let [finalDen, finalNum] = this.lowest(den3, num3);

        return [finalNum, finalDen];  // Return the simplified fraction
    }
}
