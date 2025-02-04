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
        
        let N = parseInt(readLine());
        
        
        let S = new Array(N);
        let input_S = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++){
            S[i] = input_S[i];
        }
        
        
        let F = new Array(N);
        let input_F = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++){
            F[i] = input_F[i];
        }
        
        let obj = new Solution();
        let res = obj.maxMeetings(N, S, F);
        
        let S_res = '';
        for(let i=0;i<res.length;i++)
        {
            S_res+=(res[i]);
            S_res+=' ';
        }
        console.log(S_res);
        
    }
}

// } Driver Code Ends


class Solution {
    /**
    * @param {number} N
    * @param {number[]} S
    * @param {number[]} F
    * @returns {number[]}
    */
    maxMeetings(N, S, F) {
        // Step 1: Combine the start time, finish time, and meeting index into pairs
        let pairs = S.map((s, index) => [s, F[index], index + 1]);

        // Step 2: Sort the meetings by finish time
        pairs.sort((a, b) => a[1] - b[1]);

        // Step 3: Initialize the final array with the first meeting's index
        let finalArr = [];
        finalArr.push(pairs[0][2]);
        let lastPairAdded = pairs[0];  // Keep track of the last added meeting

        // Step 4: Iterate through the remaining meetings and select the ones that do not overlap
        for (let i = 1; i < N; i++) {
            if (pairs[i][0] > lastPairAdded[1]) {  // If the current meeting's start time is after the last added meeting's finish time
                lastPairAdded = pairs[i];  // Update the last added meeting
                finalArr.push(pairs[i][2]);  // Add the current meeting's index
            }
        }

        // Step 5: Return the sorted indices of the selected meetings
        return finalArr.sort((a, b) => a - b);
    }
}
