//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // taking total testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total count of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // creating an array of size n and type int
            int arr[] = new int[n];

            // inserting elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // calling the sortArray() method
            // and passing array and size
            sortArray(arr);

            // printing the elements
            for (int i : arr) System.out.print(i + " ");

            System.out.println();
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static void sortArray(int arr[]) {
    // Your code here
    // You do not need to print
    Arrays.sort(arr);
    
}

//{ Driver Code Starts.
}

// } Driver Code Ends