//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let arr = [];
    for(let j = 0;j < N;j++){
      let inputLine = readLine().trim();
      arr.push(inputLine);
    }
    let obj = new Solution();
    let res = obj.palindromepair(N,arr);
    console.log(Number(res));
  
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} N
 * @param {number[]} arr
 * @return {boolean} 
*/
class Solution {
  // Function to check if any two words in the array form a palindrome pair
  palindromepair(N, arr) {
    let hm = new Map(); // Create a map to store the words and their corresponding indices
    
    // Fill the map with words and their indices
    for (let i = 0; i < arr.length; i++) {
      hm.set(arr[i], i);
    }
    
    // Loop through each word in the array
    for (let i = 0; i < arr.length; i++) {
      let n = arr[i].length;
      
      // Loop to check all possible prefixes and suffixes of the word
      for (let j = 0; j <= n; j++) {
        let prefix = arr[i].substring(0, j);  // Get the prefix
        let suffix = arr[i].substring(j);  // Get the suffix
        
        let reversedPrefix = prefix.split('').reverse().join('');  // Reverse the prefix
        
        // Check if the reversed prefix exists in the map and if the suffix is a palindrome
        // Also ensure that the word at the current index is not the same as the reversed word's index
        if (hm.has(reversedPrefix) && hm.get(reversedPrefix) != i && this.isPalindrome(suffix)) {
          return true;  // Return true if a palindrome pair is found
        }
        
        let reversedSuffix = suffix.split('').reverse().join('');  // Reverse the suffix
        
        // Check if the reversed suffix exists in the map, the prefix is a palindrome, and the suffix is not empty
        if (hm.has(reversedSuffix) && hm.get(reversedSuffix) != i && this.isPalindrome(prefix) && suffix.length > 0) {
          return true;  // Return true if a palindrome pair is found
        }
      }
    }
    
    // Return false if no palindrome pair is found
    return false;
  }
  
  // Function to check if a word is a palindrome
  isPalindrome(word) {
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] != word[j]) {  // If characters at i and j are not equal, it's not a palindrome
        return false;
      }
    }
    return true;  // If all characters match, return true
  }
}
