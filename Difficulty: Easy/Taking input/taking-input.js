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
        let obj = new Solution();
        obj.inputData();
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
     * Function to read input and display the output.
     * @returns none
     */
    inputData() {
        // Read the first input value as an integer
        let a = parseInt(readLine());
        
        // Read the second input value as a string
        let b = readLine();
        
        // Concatenate a and b with a space in between and store in ans
        let ans = a + " " + b;
        
        // Output the result
        console.log(ans);
    }
}
