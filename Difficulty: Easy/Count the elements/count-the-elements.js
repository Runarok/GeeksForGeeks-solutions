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

        let n = parseInt(readLine());

        let a = new Array(n);
        let input_a = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            a[i] = input_a[i];
        }

        let b = new Array(n);
        let input_b = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            b[i] = input_b[i];
        }

        let q = parseInt(readLine());

        let queries = new Array(q);

        for (let i = 0; i < q; i++) {
            let temp = parseInt(readLine());
            queries[i] = temp;
        }

        let obj = new Solution();
        let res = obj.countElements(n, a, b, q, queries);

        for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
        }

        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    countElements(n, a, b, q, queries) {
        // Sort array 'b' in ascending order
        b.sort((x, y) => x - y);

        // Array to store the result for each query
        let result = [];

        // Process each query
        for (let i = 0; i < q; i++) {
            // Get the element from array 'a' at the index given by the current query
            let element = a[queries[i]];

            // Count how many elements in 'b' are less than or equal to the current element
            result.push(this.countLessThanOrEqual(b, element));
        }

        return result;
    }

    // Helper function to count elements in sorted array 'b' that are <= x using binary search
    countLessThanOrEqual(b, x) {
        let left = 0;
        let right = b.length - 1;

        // Perform binary search
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (b[mid] <= x) {
                left = mid + 1;  // Move to the right half
            } else {
                right = mid - 1;  // Move to the left half
            }
        }

        // Final value of 'left' is the count of elements <= x
        return left;
    }
}
