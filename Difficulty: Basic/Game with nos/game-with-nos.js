//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr =readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.game_with_number(arr,n);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]} 
*/

class Solution {
    game_with_number(arr, n) {
        // Traverse the array and apply XOR between consecutive elements
        for (let i = 0; i < n - 1; i++) {
            arr[i] = arr[i] ^ arr[i + 1];
        }

        // Last element remains unchanged as there is no element left to XOR with
        return arr;
    }
}
