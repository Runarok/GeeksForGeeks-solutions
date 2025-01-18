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

        let q = parseInt(readLine());

        let queries = [];
        for (let i = 0; i < q; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            queries.push(a);
        }

        let obj = new Solution();
        let res = obj.constructList(q, queries);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number q
    * @param number[][] queries
    * @returns number[]
    */
    constructList(q, queries) {
        let s = [0];  // Start with a list containing only 0
        let global_xor = 0;  // Keeps track of the cumulative XOR
        
        for (let i = 0; i < q; i++) {
            const query = queries[i];
            if (query[0] === 0) {
                // Insert query: Add the element XORed with global_xor
                s.push(query[1] ^ global_xor);
            } else if (query[0] === 1) {
                // XOR query: Update the global_xor
                global_xor ^= query[1];
            }
        }
        
        // Apply the final global_xor to each element in s
        for (let i = 0; i < s.length; i++) {
            s[i] ^= global_xor;
        }
        
        // Sort the list and return the result
        s.sort((a, b) => a - b);
        return s;
    }
}
