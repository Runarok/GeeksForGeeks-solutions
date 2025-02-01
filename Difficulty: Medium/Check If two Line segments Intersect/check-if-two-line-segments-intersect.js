//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let p1 = new Array(2);
        let q1 = new Array(2);
        let input_p1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2; i++) {
            p1[i] = input_p1[i];
        }
        for (let i = 2; i < 4; i++) {
            q1[i - 2] = input_p1[i];
        }

        let p2 = new Array(2);
        let q2 = new Array(2);
        let input_p2 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2; i++) {
            p2[i] = input_p2[i];
        }
        for (let i = 2; i < 4; i++) {
            q2[i - 2] = input_p2[i];
        }

        let obj = new Solution();
        let res = obj.doIntersect(p1, q1, p2, q2);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number[]} p1 - Coordinates of the first point of the first line segment.
    * @param {number[]} q1 - Coordinates of the second point of the first line segment.
    * @param {number[]} p2 - Coordinates of the first point of the second line segment.
    * @param {number[]} q2 - Coordinates of the second point of the second line segment.
    * @returns {boolean} - Returns true if the two line segments intersect, false otherwise.
    */
    doIntersect(p1, q1, p2, q2) {
        // Extract coordinates from the input points
        let x1 = p1[0], y1 = p1[1];
        let x2 = q1[0], y2 = q1[1];
        let a1 = p2[0], b1 = p2[1];
        let a2 = q2[0], b2 = q2[1];

        // Function to calculate the orientation of the triplet (x1, y1), (x2, y2), (x, y)
        function calculateOrientation(x1, y1, x2, y2, x, y) {
            return (x2 - x1) * (y - y1) - (y2 - y1) * (x - x1);
        }

        // Calculate the four orientations
        let o1 = calculateOrientation(x1, y1, x2, y2, a1, b1);
        let o2 = calculateOrientation(x1, y1, x2, y2, a2, b2);
        let o3 = calculateOrientation(a1, b1, a2, b2, x1, y1);
        let o4 = calculateOrientation(a1, b1, a2, b2, x2, y2);

        // General case: the line segments intersect if the orientations have opposite signs
        if (o1 * o2 < 0 && o3 * o4 < 0) {
            return true;
        }

        // Special case: check if the points are collinear and lie on the segment
        if (o1 === 0 && this.onSegment(x1, y1, x2, y2, a1, b1)) return true;
        if (o2 === 0 && this.onSegment(x1, y1, x2, y2, a2, b2)) return true;
        if (o3 === 0 && this.onSegment(a1, b1, a2, b2, x1, y1)) return true;
        if (o4 === 0 && this.onSegment(a1, b1, a2, b2, x2, y2)) return true;

        return false;
    }

    // Function to check if point (px, py) lies on the segment (x1, y1) -> (x2, y2)
    onSegment(x1, y1, x2, y2, px, py) {
        return px <= Math.max(x1, x2) && px >= Math.min(x1, x2) &&
               py <= Math.max(y1, y2) && py >= Math.min(y1, y2);
    }
}
