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
        let str = readLine();
        let obj = new Solution();
        let res = obj.makeEven(str);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * @param {string} str
    * @returns {string}
    */
    makeEven(str) {
        let lastDigit = parseInt(str[str.length - 1]);

        // If the last digit is already even, return the string as is
        if (lastDigit % 2 === 0) {
            return str;
        }

        let swapIdx = -1;

        // Find the best even digit to swap
        for (let i = 0; i < str.length - 1; i++) {
            let digit = parseInt(str[i]);
            if (digit % 2 === 0) {
                swapIdx = i; // Store the last even digit found
                if (digit < lastDigit) {
                    break; // Prioritize the leftmost smaller even number
                }
            }
        }

        // If no even digit is found, return the original string
        if (swapIdx === -1) {
            return str;
        }

        // Swap the found even digit with the last digit
        let arr = str.split('');
        [arr[swapIdx], arr[str.length - 1]] = [arr[str.length - 1], arr[swapIdx]];

        return arr.join('');
    }
}
