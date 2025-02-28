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
        let [a,b,c] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.arrayForm(a, b, c);
        let s = obj.stringForm(a,b,c);
        let s1 = '';
        for(let i in res)
        {
            s1+=res[i];
            s1+=' ';
        }
        console.log(s1);
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to return an array form of the inputs
    arrayForm(a, b, c) {
        // Return the inputs as an array
        return [a, b , c];
    }

    // Function to return a string form of the inputs
    stringForm(a, b, c) {
        // Convert each input to a string and concatenate them
        return a.toString() + b.toString() + c.toString();
    }
}
