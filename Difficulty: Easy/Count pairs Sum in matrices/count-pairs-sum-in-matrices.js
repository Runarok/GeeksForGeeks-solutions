//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        const [n, x] = readLine().split(' ').map(t => parseInt(t));
        
        let mat1 = [];
        for(let i=0;i<n;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat1.push(a);
        }
        
        
        let mat2 = [];
        for(let i=0;i<n;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat2.push(a);
        }
        
        let obj = new Solution();
        let res = obj.countPairs(n, x, mat1, mat2);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to count the number of pairs where the sum of elements from mat1 and mat2 equals x.
     * 
     * @param {number} n
     * @param {number} x
     * @param {number[][]} mat1
     * @param {number[][]} mat2
     * @returns {number}
     */
    countPairs(n, x, mat1, mat2) {
        let pairCount = 0;

        // Loop through all elements in mat1
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let leftIndex = 0;
                let rightIndex = n - 1;

                // Use two-pointer technique to find pairs
                while (leftIndex < n && rightIndex >= 0) {
                    let pairSum = mat1[i][j] + mat2[leftIndex][rightIndex];

                    if (pairSum === x) {
                        pairCount++;
                        break;  // Break the loop as we found a valid pair
                    } else if (pairSum < x) {
                        leftIndex++;  // Move left pointer to the right for a larger sum
                    } else {
                        rightIndex--;  // Move right pointer to the left for a smaller sum
                    }
                }
            }
        }

        // Return the total count of valid pairs
        return pairCount;
    }
}
