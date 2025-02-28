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
        let str = readLine();
        
        let obj = new Solution();
        let res = obj.balancedNumber(str);
        if(res === true){
            console.log(1);
        }
        else{
            console.log(0);
        }
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str - The input numeric string.
 * @returns {boolean} - Returns true if the number is balanced, otherwise false.
*/

class Solution {
    balancedNumber(str) {
        // Initialize sum of digits on left-hand side and right-hand side.
        let leftSum = 0, rightSum = 0;

        // Find the middle index (center digit is ignored).
        let middleIndex = Math.floor(str.length / 2);

        // Calculate sum of digits on the left side.
        for (let index = 0; index < middleIndex; index++) {
            leftSum += Number(str[index]);
        }

        // Calculate sum of digits on the right side.
        for (let index = middleIndex + 1; index < str.length; index++) {
            rightSum += Number(str[index]);
        }

        // Check if both sides have equal sum.
        return leftSum === rightSum;
    }
}
