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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isStrong(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends


class Solution{
    /**
     * Function to check if a number is a Strong number.
     * A Strong number is a number such that the sum of the factorials of its digits
     * is equal to the number itself.
     * 
     * @param {number} n - The number to check
     * @returns {number} - 1 if the number is Strong, 0 otherwise
     */
    isStrong(n){
        // Precompute factorials for digits 0-9 to avoid recalculating them multiple times
        const fact = Array(10).fill(1);
        for (let i = 2; i < 10; i++) fact[i] = fact[i - 1] * i;
        
        let sum = 0, original = n;
        
        // Loop through each digit of the number
        while (n > 0) {
            let digit = n % 10;  // Extract the last digit
            sum += fact[digit];  // Add the factorial of the digit to the sum
            n = Math.floor(n / 10);  // Remove the last digit
        }
        
        // Return 1 if the sum of factorials is equal to the original number, otherwise return 0
        return sum === original ? 1 : 0;
    }
}
