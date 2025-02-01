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
        let res = obj.pairCubeCount(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript  

/**  
 * @param {number} n  
 * @returns {number}  
 */  

class Solution {  
    pairCubeCount(targetNumber) {  
        let validPairs = 0;  

        // Iterate through possible cube roots up to the cube root of the target number  
        for (let num = 1; num <= parseInt(Math.cbrt(targetNumber), 10); num++) {  

            let firstCube = num * num * num;  

            // Calculate the remaining difference after subtracting the cube  
            let remaining = (targetNumber === firstCube) ? firstCube : targetNumber - firstCube;  

            // Find the cube root of the remaining number  
            let secondCubeRoot = parseInt(Math.cbrt(remaining), 10);  

            // Check if the cube of this number equals the remaining value  
            if (secondCubeRoot * secondCubeRoot * secondCubeRoot === remaining) {  
                validPairs++;  
            }  
        }  

        return validPairs;  
    }  
}  
