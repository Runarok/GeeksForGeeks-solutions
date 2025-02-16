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
        let key = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj.findElementAtIndex(key, arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} key - The index to retrieve the element from.
    * @param {number[]} arr - The array from which to retrieve the element.
    * @returns {number} - The element at the specified index.
    */
    findElementAtIndex(key, arr) {
        return arr[key];
    }
}
