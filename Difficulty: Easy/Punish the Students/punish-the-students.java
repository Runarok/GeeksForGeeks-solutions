//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main (String[] args)
    {
        
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int n = sc.nextInt();
            double avg = sc.nextDouble ();
            int[] roll = new int[n];
            int[] marks = new int[n];
            
            for (int i = 0; i < n; ++i)
                roll[i] = sc.nextInt ();
                
            for (int i = 0; i < n; ++i)
                marks[i] = sc.nextInt ();

    		System.out.println (new Solution().shouldPunish (roll, marks, n, avg));
        
System.out.println("~");
}
        
    }
}

// Contributed By: Pranay Bansal
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to swap two numbers (used for sorting)
    public static void swap(int n1, int n2) {
        int temp = n1;
        n1 = n2;
        n2 = temp;
    }

    // Function to check whether punishment should be given based on average marks
    public static int shouldPunish(int roll[], int marks[], int n, double avg) {
        // Initialize the swap count and total sum of marks
        int swapC = 0;
        int sum = 0;

        // Calculate the total sum of marks
        for (int i = 0; i < n; i++) {
            sum += marks[i];
        }

        // Sort the roll and marks arrays using bubble sort
        for (int i = n - 1; i >= 1; i--) {
            int swapped = 0;
            for (int j = 0; j < i; j++) {
                if (roll[j] > roll[j + 1]) {
                    // Swap roll and marks arrays when needed
                    swap(roll[j], roll[j + 1]);
                    swap(marks[j], marks[j + 1]);
                    swapC++; // Increment swap count
                    swapped = 1; // Mark that a swap occurred
                }
            }
            // If no swaps occurred in a pass, the array is sorted, so break the loop
            if (swapped == 0) {
                break;
            }
        }

        // Calculate the adjusted average after considering swaps
        double calAvg = (sum - swapC) / (double) n;

        // Check if the calculated average is greater than the input average
        if (calAvg > avg) {
            return 1; // Return 1 if punishment should be given
        } else {
            return 0; // Return 0 if no punishment
        }
    }
}
