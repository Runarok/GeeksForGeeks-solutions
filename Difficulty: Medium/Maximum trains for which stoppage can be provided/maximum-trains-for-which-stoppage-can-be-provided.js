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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let trains = [];
        for(let i=0;i<m;i++)
        {
            let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
            let a = input_ar2[0];
            let b = input_ar2[1];
            let c = input_ar2[2];
            trains.push([a, b, c]);
        }
        let obj = new Solution();
        let res = obj.maxStop(n, m, trains);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} trains
 * @returns {number}
*/

class Solution {
    maxStop(n, m, trains) {
        // Edge Case: If there are no trains, return 0
        if (trains.length === 0) {
            return 0;
        }

        // Edge Case: If there's only one train, return 1
        if (trains.length === 1) {
            return 1;
        }

        // Create an object to hold platforms as keys and a list of train schedules (arrival, departure) as values
        let platforms = {};
        for (let i = 1; i <= n; i++) {
            platforms[i] = [];
        }

        // Populate the platforms with train schedules (arrival, departure)
        for (let [arrival, departure, platform] of trains) {
            platforms[platform].push([arrival, departure]);
        }

        let totalTrainStops = 0;

        // Iterate through each platform
        for (let platform in platforms) {
            // Sort the trains on the platform by their departure times
            platforms[platform].sort((a, b) => a[1] - b[1]);

            let lastDepartureTime = 0;
            let trainCount = 0;

            // Check each train for the current platform
            for (let [arrivalTime, departureTime] of platforms[platform]) {
                // If the current train arrives after the last train has departed, count this train
                if (arrivalTime >= lastDepartureTime) {
                    trainCount++;
                    lastDepartureTime = departureTime; // Update the last departure time
                }
            }

            // Add the count of trains that can stop on this platform to the total
            totalTrainStops += trainCount;
        }

        // Return the total number of train stops
        return totalTrainStops;
    }
}
