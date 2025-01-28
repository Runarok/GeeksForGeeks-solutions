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
        let s = readLine().trim();
        let obj = new Solution();
        let res=obj.compress(s);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
  // Function to compute the Longest Prefix Suffix (LPS) array
  formLps(s) {
    const n = s.length;
    const v = new Array(n).fill(0); // Initialize LPS array with zeros
    let i = 0; // Pointer for matching prefixes

    for (let j = 1; j < n; j++) {
      // If there's a mismatch, move 'i' back to the previous longest prefix
      while (i !== 0 && s[i] !== s[j]) {
        i = v[i - 1];
      }
      if (s[i] === s[j]) {  // If characters match
        v[j] = i + 1;  // Update LPS value for index 'j'
        i += 1;  // Move both pointers forward
      }
    }
    return v;
  }

  // Function to compress the given string based on repeated substrings
  compress(s) {
    const n = s.length;
    const v = this.formLps(s);  // Calculate the LPS array
    const st = [];  // Stack to store the compressed characters
    let i = n;  // Start from the end of the string

    while (i) {
      if (i % 2 === 1) {  // If the index is odd
        st.push(s[i - 1]);  // Add the character to the stack
        i -= 1;  // Move to the previous index
      } else {  // If the index is even
        if (v[i - 1] >= i / 2) {  // If the LPS value is greater than or equal to half the index
          if (i % (2 * (i - v[i - 1])) === 0) {  // Check for a specific pattern
            st.push('*');  // Add '*' to the stack
            i = Math.floor(i / 2);  // Divide the index by 2
          } else {
            st.push(s[i - 1]);  // Add the character to the stack
            i -= 1;  // Move to the previous index
          }
        } else {
          st.push(s[i - 1]);  // Add the character to the stack
          i -= 1;  // Move to the previous index
        }
      }
    }

    st.reverse();  // Reverse the stack to get the correct order
    return st.join('');  // Join the characters in the stack to form the compressed string
  }
}
