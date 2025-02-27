//{ Driver Code Starts
// Position this line where user code will be pasted.

function main() {
    const input = [];
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', chunk => { input.push(chunk); });

    process.stdin.on('end', () => {
        const data = input.join('').trim().split('\n');
        const t = parseInt(data[0], 10);
        const solution = new Solution();

        for (let i = 1; i <= t; i++) {
            const arr = data[i].split(' ').map(Number);
            const result = solution.posNegPair(arr);
            if (result.length === 0) {
                console.log("0");
            } else {
                console.log(result.join(' '));
            }
            console.log("~")
        }
    });
}

if (require.main === module) {
    main();
}
// } Driver Code Ends


class Solution {
    posNegPair(arr) {
        // Create a set for quick lookup of presence of numbers
        const numberSet = new Set(arr);
        
        // Map to store counts of positive and negative numbers for each absolute value
        const pairCountMap = new Map();
        
        // Final result array to store the valid pairs
        const resultPairs = [];

        // Loop through each number in the array
        for (let num of arr) {
            const absValue = Math.abs(num);
            const oppositeSign = -absValue;

            // Only consider numbers that have both positive and negative counterparts in the array (ignoring zeros)
            if (num !== 0 && numberSet.has(absValue) && numberSet.has(oppositeSign)) {
                if (num === absValue) {
                    // Current number is positive
                    if (pairCountMap.has(absValue)) {
                        const count = pairCountMap.get(absValue);
                        pairCountMap.set(absValue, { posCount: count.posCount + 1, negCount: count.negCount });
                    } else {
                        pairCountMap.set(absValue, { posCount: 1, negCount: 0 });
                    }
                } else {
                    // Current number is negative
                    if (pairCountMap.has(absValue)) {
                        const count = pairCountMap.get(absValue);
                        pairCountMap.set(absValue, { posCount: count.posCount, negCount: count.negCount + 1 });
                    } else {
                        pairCountMap.set(absValue, { posCount: 0, negCount: 1 });
                    }
                }
            }
        }

        // If no valid pairs found, return empty array
        if (pairCountMap.size === 0) {
            return [];
        }

        // Sort the keys to maintain order in result
        const sortedKeys = [...pairCountMap.keys()].sort((a, b) => a - b);

        // Create pairs based on minimum count of positive and negative for each number
        for (let key of sortedKeys) {
            const { posCount, negCount } = pairCountMap.get(key);
            const pairCount = Math.min(posCount, negCount);

            for (let i = 0; i < pairCount; i++) {
                resultPairs.push(-key, key);
            }
        }

        return resultPairs;
    }
}
