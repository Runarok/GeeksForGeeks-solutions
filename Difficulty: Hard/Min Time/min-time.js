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
        let locations = new Array(n);
        let types = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            locations[i] = input_ar1[i];
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            types[i] = input_ar2[i];
        }
        let obj = new Solution();
        let res = obj.minTime(n, locations, types);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} locations
 * @param {number[]} types
 * @returns {number}
*/

class Solution {
    // Function to find the minimum time required to collect all fruits and return to the origin.
    minTime(n, locations, types) {
        // Group locations by types
        let typeLocations = new Map();
        for (let i = 0; i < n; i++) {
            let loc = locations[i];
            let t = types[i];
            if (!typeLocations.has(t)) {
                typeLocations.set(t, []);
            }
            typeLocations.get(t).push(loc);
        }

        // Find the min and max location for each type
        let typeBounds = new Map();
        for (let [type, locs] of typeLocations) {
            let minLoc = Math.min(...locs);
            let maxLoc = Math.max(...locs);
            typeBounds.set(type, [minLoc, maxLoc]);
        }

        // Sort types in ascending order
        let sortedTypes = Array.from(typeBounds.keys()).sort((a, b) => a - b);

        // Initialize DP arrays
        let dpLeft = 0, dpRight = 0;  // Minimum time ending at left or right bound of the first type
        let prevLeft = 0, prevRight = 0;  // Initially at origin

        // Process each type and calculate the minimum time
        for (let t of sortedTypes) {
            let [currLeft, currRight] = typeBounds.get(t);

            // Transition from previous left/right to current left/right
            let newDpLeft = Math.min(
                dpLeft + Math.abs(prevLeft - currRight) + Math.abs(currRight - currLeft),
                dpRight + Math.abs(prevRight - currRight) + Math.abs(currRight - currLeft)
            );
            let newDpRight = Math.min(
                dpLeft + Math.abs(prevLeft - currLeft) + Math.abs(currLeft - currRight),
                dpRight + Math.abs(prevRight - currLeft) + Math.abs(currLeft - currRight)
            );

            // Update DP and bounds
            dpLeft = newDpLeft;
            dpRight = newDpRight;
            prevLeft = currLeft;
            prevRight = currRight;
        }

        // Return the minimum time to collect all fruits and return to the origin
        return Math.min(dpLeft + Math.abs(prevLeft), dpRight + Math.abs(prevRight));
    }
}
