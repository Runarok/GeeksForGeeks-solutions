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
            // taking total count of elements
            int n = temp.length;

            // creating an array of size n and type int
            int[] arr = new int[n];

            // inserting elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // calling the method filtersUsingStreams
            // and printing the result
            System.out.println(filterUsingStreams(arr));
        }
    }

    
// } Driver Code Ends

public static int filterUsingStreams(int[] arr) {
    // Use Arrays.stream() to convert the array into a stream
    // Use filter() to select only odd elements (x % 2 != 0)
    // Then, use max() to find the maximum odd element
    return Arrays.stream(arr)
                 .filter(x -> x % 2 != 0)  // filter out even elements, keeping only odd ones
                 .max()                    // find the maximum among odd elements
                 .orElse(Integer.MIN_VALUE);  // return Integer.MIN_VALUE if no odd element is found
}


//{ Driver Code Starts.
}
// } Driver Code Ends