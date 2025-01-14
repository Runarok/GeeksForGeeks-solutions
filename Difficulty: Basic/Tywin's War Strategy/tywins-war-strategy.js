//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine(), 10);
    const solution = new Solution();

    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const k = parseInt(readLine(), 10);
        console.log(solution.minSoldiers(arr, k));
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    minSoldiers(arr, k) {
        let n = arr.length;
        let lucky_count = 0;
        let needed = [];

        // Step 1: Count the lucky troops and collect the required soldiers for non-lucky troops
        for (let i = 0; i < n; i++) {
            if (arr[i] % k === 0) {
                lucky_count++;
            } else {
                // Calculate the number of soldiers needed to make arr[i] a multiple of k
                needed.push(k - (arr[i] % k));
            }
        }

        // Step 2: If already at least half are lucky, return 0
        if (lucky_count >= Math.ceil(n / 2)) {
            return 0;
        }

        // Step 3: Sort the 'needed' array to minimize the number of additional soldiers
        needed.sort((a, b) => a - b);

        let additional_soldiers = 0;
        let lucky_needed = Math.ceil(n / 2) - lucky_count;

        // Step 4: Add soldiers to non-lucky troops until we have enough lucky troops
        for (let i = 0; i < lucky_needed; i++) {
            additional_soldiers += needed[i];
        }

        return additional_soldiers;
    }
}

