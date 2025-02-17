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
        let L = input_ar1[0];
        let W = input_ar1[1];
        let B = input_ar1[2];
        let H = input_ar1[3];
        let R = input_ar1[4];
        let obj = new Solution();
        let res = obj.getAreas(L, W, B, H, R);
        printList(res, res.length);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} L - The length of the rectangle
 * @param {number} W - The width of the rectangle
 * @param {number} B - The base of the triangle
 * @param {number} H - The height of the triangle
 * @param {number} R - The radius of the circle
 * @returns {number[]} - An array containing the areas of the rectangle, triangle, and circle
 */

class Solution {
    getAreas(length, width, base, height, radius) {
        // Calculate the area of the rectangle (Length * Width)
        let rectangleArea = length * width;
        
        // Calculate the area of the triangle (0.5 * Base * Height)
        let triangleArea = Math.floor(0.5 * base * height);

        // Calculate the area of the circle (π * Radius^2), using 3.14 as an approximation for π
        let circleArea = Math.floor(3.14 * (radius ** 2));

        // Return an array with the areas of the rectangle, triangle, and circle
        return [rectangleArea, triangleArea, circleArea];
    }
}
