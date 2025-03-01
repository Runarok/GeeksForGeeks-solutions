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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let hashSize = parseInt(readLine());
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let hash = new Array(hashSize);
        let obj = new Solution();
        obj.QuadraticProbing(hash, hashSize, arr, N);
        printArray(hash, hashSize);
        
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to fill the array elements into a hash table 
     * using Quadratic Probing to handle collisions.
     * @param {number[]} tab - The hash table to store the elements.
     * @param {number} hashSize - The size of the hash table.
     * @param {number[]} arr - The array of elements to be inserted.
     * @param {number} N - The number of elements in the array.
     * @returns {number[]} - The updated hash table after inserting elements.
     */
    QuadraticProbing(tab, hashSize, arr, N) {
        // Initialize the hash table with -1 indicating empty slots
        for (let i = 0; i < hashSize; i++) {
            tab[i] = -1;  // Mark all slots as empty initially
        }

        // Loop through all elements in the array
        for (let i = 0; i < N; i++) {
            let key = arr[i];  // Current element to be inserted
            let index = key % hashSize;  // Hash index for the element
            let j = 0;  // Variable for quadratic probing

            // Handle collision using quadratic probing
            while (tab[(index + j * j) % hashSize] !== -1 && tab[(index + j * j) % hashSize] !== key) {
                j++;  // Increment j to probe next possible position
                if (j === hashSize) {
                    break;  // Break if we've probed all possible slots
                }
            }

            // Compute the final index after quadratic probing
            let nind = (index + j * j) % hashSize;

            // Insert the element if an empty slot is found
            if (tab[nind] === -1) {
                tab[nind] = key;
            }
        }

        // Return the updated hash table
        return tab;
    }
}
