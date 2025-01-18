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
        
        
        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_arr[i];
        }
        
        let obj = new Solution();
        let res = obj.sumBitDifferences(arr, n);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number[] arr
    * @returns number
    */
    sumBitDifferences(arr, n) {
        let total = 0;
        
        // Loop through each bit position (up to 17 bits because 10^5 fits in 17 bits)
        for (let i = 0; i < 17; i++) {
            let count1 = 0;
            
            // Count the number of 1s in the i-th bit position
            for (let j = 0; j < n; j++) {
                if ((arr[j] & (1 << i)) !== 0) {
                    count1++;
                }
            }
            
            // Number of 0s in the i-th bit position is the remaining elements
            let count0 = n - count1;
            
            // The number of differing bits at this bit position
            total += 2 * count1 * count0;
        }
        
        return total;
    }
}
