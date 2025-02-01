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
        for(let i=0;i<n;i++){
            arr[i] = input_line[i];
        }
        
        let obj = new Solution();
        let ans = obj.mostFrequentWord(arr, n);
        console.log(ans);
    
console.log("~");
}
}


// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string}
 */
class Solution {
    mostFrequentWord(arr, n) {
        let frequencyMap = {};  // To store the frequency and last index of each word
        let maxCount = 0;  // To track the maximum frequency
        let result = "";  // To store the result (the most frequent word)

        // Iterate through the array to count the frequency of each word and store the last index
        for (let i = 0; i < n; i++) {
            let word = arr[i];
            if (frequencyMap[word] === undefined) {
                // If the word is not in the map, initialize its count and last index
                frequencyMap[word] = { count: 1, lastIndex: i };
            } else {
                // If the word is already in the map, increment its count
                frequencyMap[word].count++;
            }
        }

        // Iterate through the array again to find the most frequent word
        for (let i = 0; i < n; i++) {
            let word = arr[i];
            // If the current word has a higher count, or if the count is equal but it appeared later
            if (frequencyMap[word].count > maxCount || 
                (frequencyMap[word].count === maxCount && frequencyMap[word].lastIndex > frequencyMap[result]?.lastIndex)) {
                maxCount = frequencyMap[word].count;  // Update max count
                result = word;  // Update the result to the current word
            }
        }

        return result;  // Return the most frequent word
    }
}
