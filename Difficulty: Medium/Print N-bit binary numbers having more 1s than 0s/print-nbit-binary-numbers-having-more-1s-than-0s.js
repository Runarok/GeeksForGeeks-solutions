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
        let res = obj.NBitBinary(N);
        let s = "";
        for(let j = 0;j<res.length;j++){
            s+=res[j] + " ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {string[]}
*/

class Solution {
    // Function to generate all valid N-bit binary numbers where 
    // the number of ones is always greater than or equal to the number of zeros at each position
    NBitBinary(n){
        // Initialize an array to store the resulting binary numbers
        const result = [];
       
        // Helper function to recursively generate the binary numbers
        function generateBinaryNumbers(n, current, position, zeroCount, oneCount) {
            // If the position reaches n, it means a complete binary number has been formed
            // We add it to the result list if the number of ones is greater than or equal to the number of zeros
            if(position === n) {
                if(oneCount >= zeroCount)
                    result.push(current);  // Add the binary number to result
                return;
            }
            
            // Recur for the next bit being 1
            generateBinaryNumbers(n, current + '1', position + 1, zeroCount, oneCount + 1);
            
            // Only add a zero if there are more ones than zeros up to this point
            if(oneCount > zeroCount)
                generateBinaryNumbers(n, current + '0', position + 1, zeroCount + 1, oneCount);
        }
       
        // Start the recursive process with an empty string, starting at position 0, and both zero and one counts at 0
        generateBinaryNumbers(n, "", 0, 0, 0);
        
        // Return the list of generated valid binary numbers
        return result;
    }
}
