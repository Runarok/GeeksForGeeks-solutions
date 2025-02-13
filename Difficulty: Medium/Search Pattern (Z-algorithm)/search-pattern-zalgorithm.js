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
        let s = readLine();
        let pat = readLine();
        let obj = new Solution();
        let res = obj.search(pat, s);
        if(res.length===0)
            res.add(-1);
        printArray(res, res.length);
    }
}


// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} pat
 * @param {string} txt
 * @returns {number[]}
*/

class Solution {
    
    // Function to construct the Z-array for a given string
    constructZarrayFunc(str) {
        let zArray = new Array(str.length).fill(0); // Initialize Z-array with 0s
        zArray[0] = str.length; // The first element is set to the length of the string
        let end = 0; // End index of the current matched substring
        let start = 0; // Start index of the current matched substring
        let i = 1; // Loop counter to iterate through the string
        
        // Iterate through the string to build the Z-array
        while(i < str.length) {
            // Case 1: We have a substring match from the start
            if(end <= i) {
                end = i; // Update the end index of the matched substring
                start = i; // Update the start index
                // Check how far the current substring matches starting from i
                while(end < str.length && str[end] === str[end - start]) {
                    end++; // Increment end index while matching characters
                }
                zArray[i] = end - start; // Store the length of the matched substring in the Z-array
                if(end !== start) end--; // Adjust the end index if necessary
            } 
            // Case 2: We are inside the previously matched substring
            else {
                // Check if the Z-value at the current index is less than the length of the matched substring
                if(zArray[i - start] + i < end) {
                    zArray[i] = zArray[i - start]; // Copy the value from the earlier substring match
                } else {
                    // If we can't use the earlier match, try matching further
                    let end1 = end + 1;
                    let start1 = i;
                    while(end1 < str.length && str[end1] === str[end1 - start1]) {
                        end1++; // Continue matching from the new starting point
                    }
                    zArray[i] = Math.min(zArray[i - start], end - i + 1) + (end1 - end) - 1; // Store the new matched length
                    start = start1; // Update start to the new matching position
                    end = end1 - 1; // Update end to the new matching position
                }
            }
            i++; // Move to the next character in the string
        }
        
        return zArray; // Return the constructed Z-array
    }
    
    // Function to search for occurrences of 'pat' in 'txt'
    search(pat, txt) {
        let result = []; // Array to store the results
        // Construct Z-array for the concatenated pattern and text
        let zArr = this.constructZarrayFunc(pat + "$" + txt);
        
        // Iterate through the Z-array to find positions where the full pattern matches
        for(let i = 0; i < txt.length; i++) {
            // Check if the Z-array value matches the length of the pattern
            if(zArr[i + pat.length + 1] === pat.length) {
                result.push(i + 1); // Store the 1-based index of the match
            }
        }
        
        // If matches were found, return the list of matching positions, else return [-1]
        return result.length > 0 ? result : [-1];
    }
}
