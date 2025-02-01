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
        obj.printPattern(n);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @returns {void}
*/

class Solution{
    printPattern(n){
        // Calculate the size of the pattern grid
        let size = 2 * n - 1;
        
        // Initialize an array to hold each row of the pattern
        let pattern = [];
        
        // Loop through each row
        for (let i = 0; i < size; i++) {
            let temp = '';
            
            // Loop through each column in the row
            for (let j = 0; j < size; j++) {
                // Calculate the minimum distance from the current position to the edges of the pattern
                let min = Math.min(i, j, size - 1 - i, size - 1 - j);
                
                // Append the value to the row string (n - min gives the correct value)
                temp += (n - min).toString();
            }
            
            // Add the row to the pattern array
            pattern.push(temp);
        }
        
        // Print the pattern by joining the rows with newlines
        console.log(pattern.join('\n'));
    }
}
