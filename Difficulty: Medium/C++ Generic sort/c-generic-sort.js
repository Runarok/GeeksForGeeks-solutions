//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Initial Template for javascript
// Position this line where user code will be pasted.
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
    while (t--) {
        let nd = readLine().split(' ').map(Number);
        let n = nd[0];
        let q = nd[1];

        let intArr = [];
        let strArr = [];
        let floatArr = [];

        switch (q) {
            case 1:
                let intArr = readLine().split(' ').map(Number);

                intArr = sortArray(intArr, n);
                printArray(intArr, n);
                break;

            case 2:
                let strArr = readLine().split(' ');
                strArr = sortArray(strArr, n);
                printArray(strArr, n);
                break;

            case 3:
                let floatArr = readLine().split(' ').map(parseFloat);
                floatArr = sortArray(floatArr, n);
                printArray(floatArr, n);
                break;
        }
    }
}

// } Driver Code Ends

// Function to sort the array based on its type
function sortArray(arr, n) {
  // Check the type of the first element to decide sorting criteria
  if (typeof arr[0] === "string") {
    // Sort the array if it is a string array
    arr.sort();
  } else if (typeof arr[0] === "number") {
    // If the array is of numbers (either integers or floating point), sort numerically
    arr.sort((a, b) => a - b);
  }
  return arr;
}

// Function to print the array
function printArray(arr, n) {
  console.log(arr.join(" "));
}