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

        let input_p = readLine().split(' ').map(x => parseFloat(x));
        let p = input_p[0];
        let s = input_p[1];

        let obj = new Solution();
        let res = obj.maxVolume(p, s);

        console.log(parseFloat(res).toFixed(2));
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
    * Function to calculate the maximum volume based on given perimeter and area
    * @param {float} perimeter - The perimeter of the shape.
    * @param {float} area - The area of the shape.
    * @returns {float} - The maximum volume.
    */
    maxVolume(perimeter, area) {
        // Calculate part1 which is used in further equations
        let part1 = perimeter - Math.sqrt(Math.pow(perimeter, 2) - (24 * area));

        // Calculate term which is part of the final volume formula
        let term = Math.pow(part1 / 12, 2);

        // Calculate the height of the shape
        let height = (perimeter / 4) - (2 * (part1 / 12));

        // Calculate and return the maximum volume
        let ans = term * height;
        return ans;
    }
}
