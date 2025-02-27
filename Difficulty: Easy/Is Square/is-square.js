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
        let [x1,y1,x2,y2,x3,y3,x4,y4] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.isSquare(x1,y1,x2,y2,x3,y3,x4,y4);
        console.log(res);
    
console.log("~");
}
}


// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} x4
 * @param {number} y4
 * @return {string}
*/

// Class representing a point with x and y coordinates
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Function to check if this point aligns with exactly two other points either horizontally or vertically
    isAlignWith(...otherPoints) {
        let alignedCount = 0;

        // Check if x-coordinate matches any other point
        for (let i = 0; i < otherPoints.length; i++) {
            if (this.x === otherPoints[i].x) {
                alignedCount++;
            }
        }

        // Check if y-coordinate matches any other point
        for (let i = 0; i < otherPoints.length; i++) {
            if (this.y === otherPoints[i].y) {
                alignedCount++;
            }
        }

        // Return true only if exactly two points align either horizontally or vertically
        return alignedCount === 2;
    }
}

class Solution {
    isSquare(x1, y1, x2, y2, x3, y3, x4, y4) {
        // Create points from the given coordinates
        const point1 = new Point(x1, y1);
        const point2 = new Point(x2, y2);
        const point3 = new Point(x3, y3);
        const point4 = new Point(x4, y4);

        // Check alignment condition for each point with the others
        let isValidSquare = true;
        isValidSquare = point1.isAlignWith(point2, point3, point4) && isValidSquare;
        isValidSquare = point2.isAlignWith(point1, point3, point4) && isValidSquare;
        isValidSquare = point3.isAlignWith(point1, point2, point4) && isValidSquare;
        isValidSquare = point4.isAlignWith(point1, point2, point3) && isValidSquare;

        // Return 'Yes' if all points align correctly to form a square, otherwise 'No'
        return isValidSquare ? 'Yes' : 'No';
    }
}
