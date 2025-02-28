//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

public static int arraySum(int[] arr) {
    int n = arr.length;
    int sum = 0;
    // Iterating through the array and summing the elements
    for (int num = 0; num < n; num++) {
        sum += arr[num];
    }
    return sum; // Returning the sum of the array elements
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
            System.out.println(arraySum(arr));
            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends