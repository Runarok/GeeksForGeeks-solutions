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

        let input_arr = readLine().split(' ').map(x => parseInt(x));
        let arr = new Array(input_arr.length);
        for (let i = 0; i < input_arr.length; i++) {
            arr[i] = input_arr[i];
        }

        let obj = new Solution();
        let res = obj.largest(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number[] arr
    * @returns number
    */
    largest(arr) {
        return Math.max(...arr);
    }
}

