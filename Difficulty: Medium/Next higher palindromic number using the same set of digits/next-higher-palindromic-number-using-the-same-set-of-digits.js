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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        console.log(obj.nextPalin(s));
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} N - The input number as a string.
 * @returns {string} - The next palindrome greater than the input number, or -1 if no such palindrome exists.
 */
class Solution {
  nextPalin(N) {
    let str = "";
    
    // Step 1: Extract the left half of the input number (including the middle element if the length is odd)
    for (let i = 0; i < Math.floor(N.length / 2); i++) {
      str += N[i];
    }

    // Step 2: Find the inflection point where the digits stop increasing
    let point = -1;
    for (let c = str.length - 2; c >= 0; c--) {
      if (str[c] < str[c + 1]) {
        point = c;
        break;
      }
    }

    // If no inflection point is found, no larger palindrome exists
    if (point === -1) {
      return -1;
    }

    // Step 3: Find the smallest digit that is greater than the one at the inflection point
    let min_i = point + 1;
    for (let j = point + 1; j < str.length; j++) {
      if (str[j] > str[point] && str[j] <= str[min_i]) {
        min_i = j;
      }
    }

    // Step 4: Swap the digits at the inflection point and the smallest greater digit
    let arr = [...str];
    [arr[point], arr[min_i]] = [arr[min_i], arr[point]];

    // Reverse the part of the string after the inflection point
    let left_part = arr.slice(0, point + 1);
    let right_part = arr.slice(point + 1).reverse();

    // Step 5: Construct the new palindrome by combining the left part, middle (if odd length), and the reversed left part
    let new_half = left_part.concat(right_part).join("");

    let middle = "";
    if (N.length % 2 !== 0) {
      middle = N[Math.floor(N.length / 2)];
    }

    let resp = new_half + middle + new_half.split("").reverse().join("");

    // Step 6: If the new palindrome is not greater than the original, return -1
    if (resp <= N) {
      return -1;
    }

    return resp;
  }
}
