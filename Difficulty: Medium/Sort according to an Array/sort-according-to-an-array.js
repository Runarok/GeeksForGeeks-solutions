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
        let N = parseInt(input_line[0]);
        let M = parseInt(input_line[1]);
        
        let A1 = new Array(N);
        
        input_line = readLine().split(' ');
        for(let i=0;i<N;i++)
        {
            A1[i] = parseInt(input_line[i]);
        }
        
        let A2 = new Array(M);
        
        input_line = readLine().split(' ');
        for(let i=0;i<M;i++)
        {
            A2[i] = parseInt(input_line[i]);
        }
        
        
        
        let obj = new Solution();
        let ans = obj.sortA1ByA2(A1, N, A2, M);
        let s="";
        for(let i=0;i<N;i++){
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A1
 * @param {number} N
 * @param {number[]} A2
 * @param {number} M
 * @returns {number[]}
*/
class Solution {
    // Function to sort an array A1 according to the order in array A2
    sortA1ByA2(A1, N, A2, M) {
        // Map to store the order of elements in A2
        let orderMap = new Map();
        
        // Fill the map with the elements of A2 and their corresponding index
        A2.forEach((value, index) => {
            if (!orderMap.has(value)) {
                orderMap.set(value, index);
            }
        });

        // Sort A1 based on the index in A2 (using the map)
        A1.sort((a, b) => {
            // Get the order index for elements a and b from the map, or Infinity if not found
            let indexA = orderMap.has(a) ? orderMap.get(a) : Infinity;
            let indexB = orderMap.has(b) ? orderMap.get(b) : Infinity;

            // If indices are different, sort based on A2's order
            if (indexA !== indexB) {
                return indexA - indexB;
            }

            // If indices are the same, sort based on the value of the elements
            return a - b;
        });

        return A1; // Return the sorted array A1
    }
}
