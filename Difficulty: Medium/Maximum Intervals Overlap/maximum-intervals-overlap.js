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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let brr = new Array(n);
        for(let i=0;i<n;i++){
            brr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findMaxGuests(arr, brr, n);
        printList(res,res.length);
        
    
console.log("~");
}
}// } Driver Code Ends

// } Driver Code Ends

class Solution {
    findMaxGuests(Entry, Exit, N) {
        // Find the maximum time range
        let max_time = Math.max(...Entry, ...Exit) + 2;
        let freq = new Array(max_time).fill(0);

        // Mark entry (+1) and exit (-1) events
        for (let i = 0; i < N; i++) {
            freq[Entry[i]] += 1;
            freq[Exit[i] + 1] -= 1;
        }

        // Compute prefix sum and find the maximum number of guests
        let max_guests = 0;
        let current_guests = 0;
        let time_of_max_guests = 0;

        for (let time = 0; time < max_time; time++) {
            current_guests += freq[time]; // Update the current guests using prefix sum
            if (current_guests > max_guests) {
                max_guests = current_guests;
                time_of_max_guests = time;
            }
        }

        return [max_guests, time_of_max_guests];
    }
}
