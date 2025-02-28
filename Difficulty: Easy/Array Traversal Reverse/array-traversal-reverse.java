//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static void arrayTraversalReverse(int[] arr) {
    // Loop through the array in reverse order and print each element
    for(int i = arr.length - 1; i >= 0; i--) {
        System.out.print(arr[i] + " ");
    }
    // No need to add a new line as it is handled by the driver code
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
            arrayTraversalReverse(arr);
            System.out.println();

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends