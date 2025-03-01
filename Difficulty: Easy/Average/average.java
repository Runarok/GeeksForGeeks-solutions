//{ Driver Code Starts
// Initial Template for Java

import java.util.Scanner;

class Main {

    
// } Driver Code Ends

// User function Template for Java

public static double posAverage(int[] arr) {
    int sum = 0, ctr = 0;

    // Loop through the array to find positive numbers
    for (int i = 0; i < arr.length; i++) {
        // Skip negative numbers
        if (arr[i] < 0) {
            continue;
        }
        
        // Add positive numbers to the sum and count them
        sum += arr[i];
        ctr += 1;
    }
    
    // If there are no positive numbers, avoid division by zero
    if (ctr == 0) {
        return 0.0;
    }

    // Return the average of positive numbers
    return (double) sum / ctr;
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
            double avg = posAverage(arr);
            System.out.println(avg);

            System.out.println("~");
        }
        scn.close();
    }
}
// } Driver Code Ends