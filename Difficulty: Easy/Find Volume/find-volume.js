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
    for(; i<t; i++) {
        let inputLine = readLine().split(' ');
        let q = parseInt(inputLine[0]);
        let obj = new Solution();
        switch(q) {
            case 1:
                let a = parseInt(inputLine[1]);
                console.log(obj.cube(a));
                break;
            case 2:
                let l = parseInt(inputLine[1]);
                let b = parseInt(inputLine[2]);
                let h = parseInt(inputLine[3]);
                console.log(obj.rectangular(l, b, h));
                break;
        }
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

class Solution {

    // Function to calculate the cube of a number
    cube(a) {
        // Return the cube of the number 'a'
        return a * a * a;
    }

    // Function to calculate the volume of a rectangular box
    rectangular(l, b, h) {
        // Return the volume of the rectangle (l * b * h)
        return l * b * h;
    }
}
