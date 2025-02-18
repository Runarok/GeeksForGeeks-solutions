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
        let res = obj.getOddOccurrence(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    // Function to find the element that occurs an odd number of times
    getOddOccurrence(arr, n){
        // Create an object to store the count of each element in the array
        const countObj = arr.reduce((acc, curr) => {
            if(!acc[curr]) {
                acc[curr] = 0;  // Initialize count if the element is not in the object
            }
            acc[curr] += 1;  // Increment count of the current element
            
            return acc;
        }, {});
        
        // Filter and return the element that has an odd count
        return Object.keys(countObj).filter((key) => countObj[key] % 2 !== 0)[0];
    }
}
