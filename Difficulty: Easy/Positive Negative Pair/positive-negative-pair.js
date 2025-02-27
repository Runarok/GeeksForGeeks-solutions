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
        
        let arr = new Array(n);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        
        let ans = obj.findPairs(arr, n)
        if(ans.length==0)
        {
            console.log(0);
        }
        else
        {
            let s="";
            for(let i=0;i<ans.length;i++)
            {
                if(ans[i]==-0)
                s+=0;
                else
                s+=ans[i];
                s+=" ";
            }
            console.log(s);
        }
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/
class Solution {
    //Function to return list containing all the pairs having both
    //negative and positive values of a number in the array.
    findPairs(arr, n) {
        // Set to store elements for quick lookup
        let elementSet = new Set();
        // Array to store the result pairs
        let result = [];

        // Loop through all elements in the array
        for (let i = 0; i < n; i++) {
            let opposite = -arr[i]; // Get the opposite sign value

            // If the opposite value already exists in the set, it's a valid pair
            if (elementSet.has(opposite)) {
                result.push(Math.min(opposite, arr[i]), Math.max(opposite, arr[i]));
            }

            // Add the current element to the set
            elementSet.add(arr[i]);
        }

        // Return result array or [0] if no pairs were found
        return result.length > 0 ? result : [0];
    }
}
