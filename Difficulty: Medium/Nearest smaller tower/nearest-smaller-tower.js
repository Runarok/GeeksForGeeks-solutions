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
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.nearestSmallestTower(arr, N);
        let s = "";
        for(let i = 0 ; i < res.length ;i++)
        {
            if(res[i]==-0)
                res[i]=0;
            s+=res[i];
            s+=" ";   
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to find the nearest smallest numbers to every element in the array.
    nearestSmallestTower(arr) {
        const n = arr.length, 
            left = Array(n).fill(-1),  // To store index of nearest smallest element on the left
            right = Array(n).fill(-1),  // To store index of nearest smallest element on the right
            result = Array(n).fill(-1),  // Final result array
            stack = [];  // Stack to help with finding nearest elements
        
        // Find nearest smaller element on the left side of each element
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();
            if (stack.length > 0) left[i] = stack[stack.length - 1];  // Update left index
            stack.push(i);
        }

        stack.length = 0;  // Reset the stack for the next pass
        
        // Find nearest smaller element on the right side of each element
        for (let i = n - 1; i >= 0; i--) { 
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) stack.pop(); 
            if (stack.length > 0) right[i] = stack[stack.length - 1];  // Update right index
            stack.push(i);
        }
        
        // Determine the closest nearest smallest element for each element
        for (let i = 0; i < n; i++) {
            if (left[i] === -1 && right[i] === -1) result[i] = -1;  // No smaller elements on either side
            else if (left[i] === -1) result[i] = right[i];  // Only right side has smaller element
            else if (right[i] === -1) result[i] = left[i];  // Only left side has smaller element
            else {
                const leftDistance = i - left[i], rightDistance = right[i] - i;
                if (leftDistance < rightDistance) result[i] = left[i];  // Closer on the left
                else if (rightDistance < leftDistance) result[i] = right[i];  // Closer on the right
                else result[i] = arr[left[i]] <= arr[right[i]] ? left[i] : right[i];  // Equal distance, choose smaller value
            }
        }
        return result;  // Return the array with indices of nearest smallest elements
    }
}
