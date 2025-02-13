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
    let s=""; 
    for(let i=0;i<n;i++){
        if(res[i]==-0)
            res[i]=0;
        s+=res[i]+" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let X = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.reachingHeight(n, X);
        if(res.length == 1 && res[0] == -1)
            {console.log("Not Possible");}
        else
            {printArray(res,res.length);}
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number[]}
*/

class Solution
{
    // Function to find the maximum element in the array and rearrange the elements
    reachingHeight(n, arr)
    {
        let v = [];  // To store the rearranged array
        if (n == 1) {  // If there's only one element, return it as it is
            v.push(arr[0]);
            return v;
        }
        arr.sort((a, b) => a - b);  // Sort the array in ascending order
        
        if (arr[0] == arr[n - 1]) {  // If all elements are the same, return [-1]
            return [-1];
        }
        
        let hi = n - 1;  // Pointer to the largest element
        let lo = 0;  // Pointer to the smallest element
        let is_hi = true;  // Flag to toggle between high and low elements

        while (lo <= hi) {
            if (is_hi) {  // If the flag is true, take the high element
                v.push(arr[hi]);
                hi -= 1;  // Move the high pointer
            } else {  // If the flag is false, take the low element
                v.push(arr[lo]);
                lo += 1;  // Move the low pointer
            }
            is_hi = !is_hi;  // Toggle the flag for the next iteration
        }

        return v;  // Return the rearranged array
    }
}
