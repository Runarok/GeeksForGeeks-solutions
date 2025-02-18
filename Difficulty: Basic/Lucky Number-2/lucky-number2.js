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
        console.log(obj.getLuckyNum(N));
        
    
console.log("~");
}
}
// } Driver Code Ends

class Solution
{
    // Function to get the lucky number.
    getLuckyNum(N)
    {
        // Initialize variables to store the lucky numbers for each divisor
        let a5 = 0, a55 = [];
        let a3 = 0, a33 = [];
        let a2 = 0, a22 = [];

        // Loop through all numbers from 0 to N to classify them based on divisibility
        for (let i = 0; i <= N; i++) {
            if (i % 6 === 0) a55.push(i);  // Divisible by 6
            if (i % 10 === 0) a33.push(i); // Divisible by 10
            if (i % 15 === 0) a22.push(i); // Divisible by 15
        }

        // Nested loops to find the correct combination of lucky numbers
        for (let i = 0; i < a55.length; i++) {
            for (let j = 0; j < a33.length; j++) {
                for (let k = 0; k < a22.length; k++) {
                    // Check if the sum of the lucky numbers equals N
                    if (a55[i] + a33[j] + a22[k] === N) {
                        a5 = a55[i];
                        a3 = a33[j];
                        a2 = a22[k];
                    }
                }
            }
        }

        // Generate the lucky number string using the calculated lucky digits
        let str = '5'.repeat(a5) + '3'.repeat(a3) + '2'.repeat(a2);

        // Return -1 if no lucky number found, else return the lucky number
        if (!str) return -1;
        return str;
    }
}
