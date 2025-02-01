//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr1 = readLine().split(' ').map(x => parseInt(x));
        let arr2 = readLine().split(' ').map(x => parseInt(x));
        let res = new Array(arr1.length + arr2.length);

        let solution = new Solution();
        solution.sortedMerge(arr1, arr2, res);

        console.log(res.join(' '));
        console.log("~");
    }
}
// } Driver Code Ends

// User-defined function Template for JavaScript  

class Solution {  
    sortedMerge(array1, array2, resultArray) {  
        // Get the sizes of both arrays  
        let size1 = array1.length;  
        let size2 = array2.length;  
        let index1 = 0;  

        // Insert elements from the first array into the result array  
        while (index1 < size1) {  
            resultArray.push(array1[index1]);  
            index1++;  
        }  

        let index2 = 0;  
        // Insert elements from the second array into the result array  
        while (index2 < size2) {  
            resultArray.push(array2[index2]);  
            index2++;  
        }  

        // Sort the merged array in ascending order  
        resultArray.sort((a, b) => a - b);  

        return resultArray;  
    }  
}  
