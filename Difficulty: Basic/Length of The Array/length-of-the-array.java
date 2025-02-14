//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {
    
// } Driver Code Ends

public static int arrayLength(int[] arr) {
    // Return the length of the array
    return arr.length;
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
            System.out.println(arrayLength(arr));

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends