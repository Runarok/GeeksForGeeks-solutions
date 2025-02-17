//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let j = 0; j < t; j++) {
        let date = parseInt(readLine());

        let car = readLine().split(' ').map(Number);
        let fine = readLine().split(' ').map(Number);

        let obj = new Solution();
        let res = obj.totalFine(date, car, fine);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    /**
    * @param {number} date
    * @param {number[]} car
    * @param {number[]} fine
    * @returns {number}
    */
    totalFine(date, car, fine) {
        let total = 0;
        
        // Check if the date is even or odd and calculate total fine accordingly
        if (date % 2 === 0) {
            // If the date is even, add fines for odd car numbers
            for (let i = 0; i < car.length; i++) {
                if (car[i] % 2 !== 0) {
                    total += fine[i];
                }
            }
        } else {
            // If the date is odd, add fines for even car numbers
            for (let i = 0; i < car.length; i++) {
                if (car[i] % 2 === 0) {
                    total += fine[i];
                }
            }
        }
        return total; // Return the total fine
    }
}
