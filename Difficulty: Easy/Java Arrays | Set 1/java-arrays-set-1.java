//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume the newline character after the integer input

        while (t-- > 0) {
            // Read the entire line containing the array elements
            String line = sc.nextLine();
            String[] tokens = line.trim().split("\\s+");

            // Convert tokens to integers and store in an array
            int[] arr = new int[tokens.length];
            // int sum = 0;
            for (int i = 0; i < tokens.length; i++) {
                arr[i] = Integer.parseInt(tokens[i]);
            }

            // Compute the average
            Solution ob = new Solution();
            String avg = ob.average(arr);

            // Print sum and formatted average
            System.out.println(avg);
        
System.out.println("~");
}
        sc.close();
    }
}
// } Driver Code Ends

class Solution {
    public String average(int arr[]) {
        // Variable to hold the sum of all elements in the array
        double sum = 0;
        
        // Iterate through the array to calculate the sum
        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        
        // Calculate the average by dividing the sum by the length of the array
        sum = sum / arr.length;
        
        // Return the average formatted to 2 decimal places
        return String.format("%.2f", sum);
    }
}
