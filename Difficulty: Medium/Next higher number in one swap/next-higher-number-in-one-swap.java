//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

public class GFG 
{
    public static void main(String args[]) 
    {
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        while (t-- > 0) 
        {
            String s = sc.next();
            
            Solution sol = new Solution();
            System.out.println(sol.nxtHighUsingAtMostOneSwap(s));
        }
    }
}


// } Driver Code Ends

class Solution {
   
    // Function to find the next higher number using at most one swap
    public static String nxtHighUsingAtMostOneSwap(String num) {
        char[] arr = num.toCharArray();  // Convert the input string to a character array
        int n = arr.length;
        char []res = num.toCharArray();  // This will hold the result
        
        // Step 1: Find the first decreasing digit from the right (left to right in the number)
        int i;
        for (i = n - 2; i >= 0; i--) {
            if (arr[i] < arr[i + 1]) {
                break;  // Found the digit that needs to be swapped
            }
        }

        // Step 2: If no such index is found, it means the number is already the largest permutation
        if (i < 0) {
            return "-1";  // No larger number possible
        }

        // Step 3: Find the smallest digit larger than arr[i] on its right
        int j = n - 1;
        while (arr[j] <= arr[i]) {
            j--;  // Move j to find the right digit larger than arr[i]
        }
        while (arr[j - 1] == arr[j]) {
            j--;  // Skip duplicates if any to ensure the correct swap
        }

        // Step 4: Swap the digits at i and j to form the next greater number
        swap(arr, i, j);

        // Step 5: Return the resulting number as a string
        return new String(arr);  // Convert character array back to string and return
    }

    // Helper function to swap characters in the array
    private static void swap(char[] arr, int i, int j) {
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Function to compare two arrays lexicographically
    static int check(char[] arr, char[] brr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > brr[i]) return 1;  // arr is lexicographically larger
            else if (arr[i] < brr[i]) return -1;  // arr is lexicographically smaller
        }
        return 0;  // Both arrays are equal
    }
}
