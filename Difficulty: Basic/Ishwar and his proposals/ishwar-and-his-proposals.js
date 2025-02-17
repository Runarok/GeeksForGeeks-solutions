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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++)
            arr[i] = parseInt(input_line[i]);
        
        let obj = new Solution();
        let res = obj.acceptedProposals(arr, n);
        
        let s = "";
        for(let it of res)
            s+=it+" ";
        console.log(s);
    
console.log("~");
}
}


// } Driver Code Ends

class Solution
{
    /**
     * Function to find the two elements, the second largest and second smallest, in the sorted array.
     * 
     * @param {number[]} arr - The array of integers
     * @param {number} n - The size of the array
     * @returns {number[]} - An array containing the second largest and second smallest elements
     */
    acceptedProposals(arr, n)
    {
        // Sort the array in ascending order
        arr.sort((a,b)=>a-b);
        
        // The second smallest element is at index 1 (0-based indexing), and 
        // the second largest element is at index n-2
        let ans = [arr[n-2], arr[1]];
        
        // Return the array containing the second largest and second smallest elements
        return ans;
    }
}
