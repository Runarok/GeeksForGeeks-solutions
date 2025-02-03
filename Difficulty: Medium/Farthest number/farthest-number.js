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
        let Arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            Arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.farNumber(N,Arr);
        let s='';
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} Arr
 * @returns {number}
*/

class Solution {
    // Function to find the first negative number in every window of size k
    farNumber(N, Arr) {
        // Initialize a suffix array to store the minimum values from the right
        let suffixArray = new Array(N).fill(0);
        suffixArray[N-1] = Arr[N-1]; // Set the last element as itself
       
        // Fill the suffix array by calculating the minimum from the right to left
        for (let i = N - 2; i >= 0; i--) {
            suffixArray[i] = Math.min(Arr[i], suffixArray[i + 1]);
        }

        // Initialize the answer array
        let ansArr = new Array(N).fill(0);
        ansArr[N - 1] = -1; // Set the last element to -1 as no elements exist after it
        
        // Iterate through the array to find the first negative number in each window
        for (let i = 0; i < N; i++) {
            let low = i + 1;  // Search range starts from the next element
            let high = N - 1; // Search range goes till the end of the array
            let index = -1; // Initialize the result as -1 (not found)

            // Perform binary search to find the first negative number
            while (low <= high) {
                let mid = Math.floor((low + high) / 2); // Calculate the middle index
                if (Arr[i] > suffixArray[mid]) { // If the current element is greater than the suffix value
                    index = mid;  // Update the index as a potential answer
                    low = mid + 1; // Narrow the search to the right side
                } else {
                    high = mid - 1; // Otherwise, search on the left side
                }
            }
            
            // Set the result for this element in the answer array
            ansArr[i] = index;
        }

        // Return the final array of indices of the first negative numbers
        return ansArr;
    }
}
