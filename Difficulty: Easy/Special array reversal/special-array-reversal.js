//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        let S = readLine();
        let obj = new Solution();
        let res = obj.reverse(S);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    reverse(s) {
        // Create an array of characters from the string that are alphabetic
        let chars = [...s].filter(c => /[a-zA-Z]/.test(c));
        
        // Reverse the characters array
        let reversed = chars.reverse();
        
        // Convert the original string to a list
        let result = [...s];
        let j = 0;

        // Replace alphabetic characters in the original list with the reversed characters
        for (let i = 0; i < result.length; i++) {
            if (/[a-zA-Z]/.test(result[i])) {
                result[i] = reversed[j];
                j++;
            }
        }

        // Return the modified string
        return result.join('');
    }
}
