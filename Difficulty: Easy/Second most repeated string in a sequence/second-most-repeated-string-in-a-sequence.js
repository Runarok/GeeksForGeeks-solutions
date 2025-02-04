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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.secFrequent(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string[]} arr - Array of strings
 * @param {number} n - Number of elements in the array
 * @returns {string} - The second most frequently occurring string
 */

class Solution {
    secFrequent(arr, n) {
        // Initialize a hashmap to store the frequency of each string
        let frequencyMap = {};

        // Iterate through the array and populate the frequency map
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in frequencyMap) {
                frequencyMap[arr[i]] += 1;
            } else {
                frequencyMap[arr[i]] = 1;
            }
        }

        // Variables to track the highest and second highest frequencies
        let maxFrequency = Number.MIN_SAFE_INTEGER;
        let secondMaxFrequency = Number.MIN_SAFE_INTEGER;

        // Variables to track the most and second most frequent strings
        let mostFrequentString = "";
        let secondMostFrequentString = "";

        // Iterate through the frequency map to determine the top two most frequent strings
        for (let key in frequencyMap) {
            if (frequencyMap[key] > maxFrequency) {
                // Update second max before replacing max
                secondMaxFrequency = maxFrequency;
                secondMostFrequentString = mostFrequentString;

                // Update max values
                maxFrequency = frequencyMap[key];
                mostFrequentString = key;
            }
            // Update second max if the current frequency is between max and second max
            if (frequencyMap[key] > secondMaxFrequency && frequencyMap[key] < maxFrequency) {
                secondMaxFrequency = frequencyMap[key];
                secondMostFrequentString = key;
            }
        }

        // Return the second most frequent string
        return secondMostFrequentString;
    }
}
