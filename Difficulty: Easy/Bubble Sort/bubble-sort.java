//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to sort the array using recursive bubble sort algorithm.
    static void bubbleSortRecursion(int arr[], int remainingLength) {
        // Base case: if only one element remains, array is already sorted
        if (remainingLength == 1) return;
        
        // Perform one pass of bubble sort (move largest element to the end)
        for (int i = 0; i < remainingLength - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        
        // Recursive call to sort the remaining array (excluding the last element)
        bubbleSortRecursion(arr, remainingLength - 1);
    }
    
    public static void bubbleSort(int arr[]) {
        // Initialize recursion with full array length
        int length = arr.length;
        bubbleSortRecursion(arr, length);
    }
}


//{ Driver Code Starts.

class Sorting {
    // method to print the Elements of the array
    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i) System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim()); // Inputting the testcases
        while (t > 0) {
            String inputLine[] = br.readLine().trim().split(" ");
            int n = inputLine.length;
            int arr[] = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }
            // calling bubbleSort() method
            new Solution().bubbleSort(arr);

            // calling printArray() method
            printArray(arr);

            t--;
        }
    }
}
// } Driver Code Ends