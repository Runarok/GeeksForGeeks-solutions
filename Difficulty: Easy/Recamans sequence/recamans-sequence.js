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
        
        let n = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.recamanSequence(n);
        
        let S_res = '';
        for(let i=0;i<res.length;i++)
        {
            S_res+=(res[i]);
            S_res+=' ';
        }
        console.log(S_res);
        
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n
    * @param {number[]} result
    * @param {Set} seen
    * @returns {number[]}
    */
    recamanSequence(n, result = [], seen = new Set()) {
        // Base case: the first element of the Recaman sequence is always 0
        if (n == 1) {
            result.push(0);
            seen.add(0);
            return result;
        }
        
        // Recursive call to generate the sequence for the previous value
        this.recamanSequence(n - 1, result, seen);
        
        // Get the last value in the sequence to calculate the next value
        let previous = result[result.length - 1];
        let current = previous - (n - 1); // Try subtracting (n-1)
        
        // Check if the current value is valid (positive and not already in the sequence)
        if (current > 0 && !seen.has(current)) {
            seen.add(current); // Add the value to the set of seen numbers
            result.push(current); // Add the current valid value to the result sequence
        } else {
            // If subtracting doesn't work, add (n-1) to the previous value and push it to the result
            seen.add(previous + (n - 1));
            result.push(previous + (n - 1));
        }
        
        return result;
    }
}
