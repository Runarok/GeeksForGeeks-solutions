//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking number of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // taking the value to be searched
            int x = sc.nextInt();
            sc.nextLine();
            // creating an array of size n
            int arr[] = new int[n];

            // inserting elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // calling the method binarySearchArray()
            // and passing array, length and x
            // printing the result
            System.out.println(binarySearchArray(arr, x));
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static int binarySearchArray(int arr[], int k) {
    // Use the binarySearch method from Arrays to find the index of k
    int i = Arrays.binarySearch(arr, k);
    
    // If k is found, binarySearch returns the index, otherwise it returns a negative value
    if (i >= 0) {
        return i;  // Return the index of k if found
    } else {
        return -1; // Return -1 if k is not found
    }
}


//{ Driver Code Starts.
}

// } Driver Code Ends