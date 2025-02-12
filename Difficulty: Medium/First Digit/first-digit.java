//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[]) throws IOException { 
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while(t > 0){
            int n = sc.nextInt();
            int arr[] = new int[n];
            for (int i = 0; i < n; ++i)
                arr[i] = sc.nextInt();
            Solution ob = new Solution();
            System.out.println(ob.firstDigit(arr,n));
            t--;
        }
    } 
} 
// } Driver Code Ends

class Solution {
    // Function to find the first digit of the product of all elements in the array
    static int firstDigit(int arr[], int n) { 
        double ans = 1.0;  // Initialize the product as 1.0 (as a double for precision)
        
        // Loop through all elements in the array
        for(int x : arr){
            ans *= x;  // Multiply the current element with the result
            // If the product becomes greater than 10, reduce it to keep only the leading digit
            while(ans > 10) {
                ans /= 10;
            }
        }
        
        // Return the first digit of the product (converted to an integer)
        return (int)ans;
    } 
}
