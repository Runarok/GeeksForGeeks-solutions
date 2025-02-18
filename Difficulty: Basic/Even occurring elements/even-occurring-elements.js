//{ Driver Code Starts
// Initial Template for JavaScript
// Position this line where user code will be pasted.

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.findEvenOccurrences(arr).join(' '));
        console.log("~");
    }
}

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

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find elements that occur an even number of times, in the order of their first occurrence
    findEvenOccurrences(arr) {
        // Map to store elements and their occurrence count along with first occurrence index
        let elementMap = new Map();

        // Array to store elements with even occurrences
        let evenOccuredElementsArray = new Array();

        // Array to store the final result of elements with even occurrences in the correct order
        let resultArray = new Array();

        // Iterate through the input array to count occurrences and store first occurrence index
        for (let i = 0; i < arr.length; i++) {
            // If element already exists in the map, update its count and index
            if (elementMap.has(arr[i])) {
                elementMap.set(arr[i], { value: elementMap.get(arr[i]).value + 1, index: elementMap.get(arr[i]).index });
            } else {
                // If element is encountered for the first time, set its count to 1 and store the index
                elementMap.set(arr[i], { value: 1, index: i });
            }
        }

        // Loop through the map and collect elements that occur an even number of times
        for (let [key, value] of elementMap) {
            if (value?.value % 2 == 0) {
                evenOccuredElementsArray.push({ key, value });
            }
        }

        // Sort the even occurred elements based on their first occurrence index
        evenOccuredElementsArray = evenOccuredElementsArray.sort((element1, element2) => element1?.value?.index - element2?.value?.index);

        // Populate the result array with elements that occurred an even number of times
        for (let i = 0; i < evenOccuredElementsArray.length; i++) {
            resultArray.push(arr[evenOccuredElementsArray[i]?.value?.index]);
        }

        // If we found any element with even occurrences, return the result array, else return [-1]
        return evenOccuredElementsArray.length > 0 ? resultArray : [-1];
    }
}
