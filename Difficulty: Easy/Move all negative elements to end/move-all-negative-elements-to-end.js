//{ Driver Code Starts
function main() {
    const readline = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let input = [];
    readline.on('line', (line) => { input.push(line); });

    readline.on('close', () => {
        let T = parseInt(input[0]);
        let index = 1;

        while (T > 0) {
            let a = input[index].trim().split(' ').map(Number);
            let ob = new Solution();
            ob.segregateElements(a);
            console.log(a.join(' '));

            index++;
            T--;
            console.log("~");
        }
    });
}

main();
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    // Function to segregate positive and negative numbers
    segregateElements(arr) {
        // Create a copy of the input array to preserve the original order
        let temp = [...arr];
        let index = 0;

        // Move positive elements to the front of the array
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] >= 0) {
                arr[index++] = temp[i];
            }
        }

        // Move negative elements to the end of the array
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] < 0) {
                arr[index++] = temp[i];
            }
        }
    }
}
