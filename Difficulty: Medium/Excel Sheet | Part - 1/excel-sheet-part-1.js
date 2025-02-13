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

function printArray(res, n) {
    for(let i=0;i<n;i++){
        let s="";
        s+=res[i];
        console.log(s);
    }
    
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.ExcelColumn(n);
        console.log(res);
    
console.log("~");
}
}



// } Driver Code Ends

class Solution {
    // Function to convert a number to its corresponding Excel column name
    ExcelColumn(n) {
        let str = []; // To store the column name as an array of characters
        
        // Loop until the number is greater than 0
        while (n !== 0) {
            n--; // Adjust n to account for 1-based indexing
            let mod = n % 26; // Find the remainder when dividing by 26
            str.push(String.fromCharCode(65 + mod)); // Convert the remainder to a letter (A=65, B=66, ..., Z=90)
            n = Math.floor(n / 26); // Move to the next higher place value (like moving to the next digit in a number system)
        }
        
        // Reverse the array and join it to form the final string
        return str.reverse().join('');
    }
}
