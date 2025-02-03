//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let input = readLine().split(' ').map(x => parseInt(x));
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(input[i]);
    }
    let x = parseInt(readLine());
    let obj = new Solution();
    let res = obj.find_height(arr, n, x);
    console.log(res);
  
console.log("~");
}
}



// } Driver Code Ends


class Solution {
    find_height(tree, n, k) {
        let low = 0; 
        let high = Math.max(...tree); // The maximum height of any tree in the array
        
        function woodCollected(height) {
            let wood = 0;
            for (let i = 0; i < n; i++) {
                if (tree[i] > height) {
                    wood += tree[i] - height;
                }
            }
            return wood;
        }

        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let wood = woodCollected(mid);
            
            if (wood === k) {
                result = mid; // We found the height
                break;
            } else if (wood < k) {
                high = mid - 1; // Decrease height to collect more wood
            } else {
                low = mid + 1; // Increase height to collect less wood
            }
        }

        return result;
    }
}
