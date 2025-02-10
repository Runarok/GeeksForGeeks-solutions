//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();
        let obj = new Solution();
        let res = obj.cat_hat(str);
        if (res)
            console.log("True");
        else
            console.log("False");
    
console.log("~");
}
}

// } Driver Code Ends
class Solution {
    /**
     * @param {string} str
     * @returns {boolean}
     */
    cat_hat(str) {
        // Count occurrences of "cat" and "hat" in the string
        let catCount = (str.match(/cat/g) || []).length;
        let hatCount = (str.match(/hat/g) || []).length;

        // Return true if counts are equal, otherwise false
        return catCount === hatCount;
    }
}