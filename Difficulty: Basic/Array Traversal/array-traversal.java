//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends
// User function Template for Java
public static void arrayTraversal(int[] arr) {
    // Traverse through the array and print each element with a space
    for (int i = 0; i < arr.length; i++) {
        // Print element followed by space, but avoid printing a trailing space
        System.out.print(arr[i]);
        if (i < arr.length - 1) {
            System.out.print(" "); // Print space after each element except the last one
        }
    }
}


//{ Driver Code Starts.

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while (t-- > 0) {
            int n = scn.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = scn.nextInt();
            }
            arrayTraversal(arr);
            System.out.println();

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends