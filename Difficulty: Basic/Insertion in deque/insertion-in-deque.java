//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking the total count of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;
            // Declaring and Initializing an array of size n
            int arr[] = new int[n];

            // inserting the elements to the array
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }

            // calling the method deque_Init
            // and storing the result in a
            // new ArrayDequeu
            Solution ob = new Solution();
            ArrayDeque<Integer> deque = ob.deque_Init(arr, n);

            // Printing all the elements
            // of ArrayDeque
            for (int x : deque) {
                System.out.print(x + " ");
            }
            System.out.println();
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to insert all elements of the array in deque.
    public static ArrayDeque<Integer> deque_Init(int arr[], int n) {
        // Create an empty ArrayDeque
        ArrayDeque<Integer> deque = new ArrayDeque<>();
        
        // Loop through the array and add each element to the deque
        for (int i = 0; i < n; i++) {
            deque.add(arr[i]);
        }
        
        // Return the deque
        return deque;
    }
}
