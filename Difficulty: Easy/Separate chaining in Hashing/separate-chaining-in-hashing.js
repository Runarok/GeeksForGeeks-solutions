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
        let hashSize = parseInt(readLine());
        let sizeOfArray = parseInt(readLine());
        let arr = new Array(sizeOfArray);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<sizeOfArray;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.separateChaining(hashSize, arr, sizeOfArray);
        for(let i=0; i<res.length; i++)
	    {
	        if(res[i].length>0)
	        {
	            let s='';
	            s+=i;
	            for(let j=0;j<res[i].length;j++)
	            {
	                s+="->"+res[i][j];
	            }
	            console.log(s);
	        }
	    }
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} hashSize
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @returns {number[][]}
*/

class Solution {
    // Function to insert elements of array into the hash table using separate chaining to handle collisions.
    separateChaining(hashSize, arr, sizeOfArray)
    {
        // Initialize hash table with empty arrays for each bucket.
        let hashTable = new Array(hashSize).fill(null).map(() => []);
        
        // Loop through each element in the input array.
        for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];  // Current element to be inserted.
            let index = currentElement % hashSize;  // Calculate hash index.
            
            // Add the element to the corresponding bucket.
            hashTable[index].push(currentElement);
        }
       
        // Return the final hash table.
        return hashTable;
    }
}
