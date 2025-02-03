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

        // let arr = new Array(5);
        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.pairsum(arr);
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
    pairsum(arr) {
        // Initialize variables for the largest and second largest values
        let largest = -1;
        let secondlargest = -1;

        // Iterate over the array to find the two largest values
        for (let num of arr) {
            if (num > largest) {
                secondlargest = largest;
                largest = num;
            } else if (num > secondlargest && num < largest) {
                secondlargest = num;
            }
        }

        // Calculate the sum of the largest and second largest values
        let result = largest + secondlargest;

        // Return the result
        return result;
    }
}
