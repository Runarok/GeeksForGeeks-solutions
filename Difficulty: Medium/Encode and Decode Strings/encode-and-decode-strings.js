//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let ip = readLine().trim().split(" ");
        let strs = [];
        for (let x of ip) {
            strs.push(x);
        }
        let obj = new Solution();
        let ans = obj.encode(strs);
        let arr = obj.decode(ans);
        let s = "";
        for (let it = 0; it < arr.length; it++) {
            s += arr[it];
            s += " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


class Solution {
    // Function to encode a list of strings to a single string.
    encode(s) {
        let encodedString = '';
        
        // Loop through each string in the array
        for (let i = 0; i < s.length; i++) {
            // Encode each string as length followed by the string itself
            encodedString += s[i].length + '#' + s[i];
        }
        
        return encodedString;
    }

    // Function to decode a single string to a list of strings.
    decode(s) {
        let decodedStrings = [];
        let i = 0;

        // Loop through the encoded string to extract the strings
        while (i < s.length) {
            let length = 0;
            
            // Extract the length of the next string
            while (s[i] !== '#') {
                length = length * 10 + (s[i] - '0');  // Get the number before '#'
                i++;
            }
            i++;  // Skip the '#'

            // Get the string of the given length
            decodedStrings.push(s.slice(i, i + length));
            i += length;  // Move to the next string part
        }

        return decodedStrings;
    }
}
