//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking count of total testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            String temp[] = sc.nextLine().trim().split(" ");
            // creating an array of size n
            int n = temp.length;
            int[] arr = new int[n];

            // adding elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // calling the method sumUsingStreams
            // and printing results
            System.out.println(sumUsingStreams(arr));
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static int sumUsingStreams(int[] numbers) {
    // Initialize a variable to store the total sum
    int totalSum = 0;

    // Iterate through each element in the array and add it to totalSum
    for (int i = 0; i < numbers.length; i++) {
        totalSum += numbers[i];
    }

    // Return the computed sum
    return totalSum;
}

//{ Driver Code Starts.
}
// } Driver Code Ends