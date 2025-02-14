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
            String temp[] = sc.nextLine().trim().split(" ");
            // sc.nextLine();
            // taking total count of elements
            int n = temp.length;

            // creating a new array of size n of type int
            int[] arr = new int[n];

            // inserting elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // calling avgUsingStreams method
            // and printing the result
            System.out.println(avgUsingStreams(arr));
        }
    }

    
// } Driver Code Ends
// User function Template for Java

public static double avgUsingStreams(int[] arr) {
    // Calculating the average using streams and returning the result
    return Arrays.stream(arr).average().getAsDouble();
}


//{ Driver Code Starts.
}
// } Driver Code Ends