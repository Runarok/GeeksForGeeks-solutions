//{ Driver Code Starts


function main() {
    const readline = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let inputLines = [];
    readline.on('line', (line) => { inputLines.push(line); });

    readline.on('close', () => {
        let t = parseInt(inputLines[0]);
        let index = 1;
        while (t-- > 0) {
            let k = parseInt(inputLines[index]);
            let arr = inputLines[index + 1].split(' ').map(Number);
            let ob = new Solution();
            ob.swapKth(arr, k);
            console.log(arr.join(' '));

            console.log("~");
            index += 2;
        }
    });
}

main();

// } Driver Code Ends

class Solution {
    // Function to swap the k-th element from the beginning with the k-th element from the end.
    swapKth(arr, k) {
        // Store the k-th element from the beginning of the array (0-based index)
        let temp = arr[k - 1];
        
        // Swap the k-th element from the beginning with the k-th element from the end
        arr[k - 1] = arr[arr.length - k];
        
        // Assign the stored value of the k-th element from the beginning to its new position
        arr[arr.length - k] = temp;
    }
}
