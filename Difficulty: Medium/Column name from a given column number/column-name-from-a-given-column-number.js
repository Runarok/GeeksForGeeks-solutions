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
        
        let N = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.colName(N);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    /**
     * @param {number} N
     * @returns {string}
     */
    colName(N) {
        let result = "";
        while (N > 0) {
            let remainder = N % 26;
            N = Math.floor(N / 26);
            
            if (remainder == 0) {
                remainder = 26;
                N--;
            }
            
            result += String.fromCharCode(remainder + 64);
        }
        
        return result.split('').reverse().join('');
    }
}
