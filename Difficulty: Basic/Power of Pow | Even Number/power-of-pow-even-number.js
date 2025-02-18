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
        let res = obj.sum_of_square_evenNumbers(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends





// } Driver Code Ends

class Solution{
    sum_of_square_evenNumbers(n){
        // Initialize the starting base value for even numbers
        let baseValue = 2;
        // Initialize the sum of squares to 0
        let sumOfSquares = 0;
        // Initialize the number of even numbers to start with
        let currentEvenNumber = 2;
        
        // Loop through 'n' times to calculate the sum of squares of the first 'n' even numbers
        for (let i = 1; i <= n; i++) {
            // Add the square of the current even number to the sum
            sumOfSquares += Math.pow(currentEvenNumber, baseValue);
            // Move to the next even number
            currentEvenNumber += 2;
        }
        
        // Return the calculated sum of squares of even numbers
        return sumOfSquares;
    }
}
