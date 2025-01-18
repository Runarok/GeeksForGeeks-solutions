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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.singleElement(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    //Function to find the element that occurs once in the array.
    singleElement(arr, N) {
        let ones = 0;
        let twos = 0;

        for (let i = 0; i < N; i++) {
            // Update twos with the bits that appear twice
            twos |= ones & arr[i];
            
            // Update ones with the current element's bits
            ones ^= arr[i];
            
            // Mask out the bits that appear three times
            let threes = ones & twos;
            ones &= ~threes;
            twos &= ~threes;
        }

        return ones;
    }
}
