//{ Driver Code Starts
// Initial Template for Java
/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total number of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // creating an array of length n and type int
            int arr[] = new int[n];

            // adding elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // taking k
            int k = sc.nextInt();
            sc.nextLine();
            // calling fillArray method
            // and passing array,
            // size and k
            fillArray(arr, k);

            // printing the elements
            // of the array
            for (int i : arr) System.out.print(i + " ");

            System.out.println();
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static void fillArray(int array[], int value) {
    // Iterate through each index of the array and assign the given value
    for (int i = 0; i < array.length; i++) {
        array[i] = value;
    }
}


//{ Driver Code Starts.
}

// } Driver Code Ends