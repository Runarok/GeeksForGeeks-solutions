//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int[] ans = ob.numberWithNoConsecutiveOnes(n);
            for(int i = 0; i < ans.length; i++)
                System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to return the numbers with no consecutive 1's in their binary representation
    public int[] numberWithNoConsecutiveOnes(int n) {
        // List to store the numbers with no consecutive 1's
        ArrayList<Integer> list = new ArrayList<>();
        
        // Loop through all numbers from 1 to 2^n - 1
        for (int i = 1; i < Math.pow(2, n); i++) {
            // Convert the number to its binary string representation
            String str = Integer.toBinaryString(i);
            
            // Check if the binary string contains "11" (consecutive 1's)
            if (!str.contains("11")) {
                // If no consecutive 1's, add it to the list
                list.add(i);
            }
        }
        
        // Convert the list to an array
        int arr[] = new int[list.size()];
        int k = 0;
        
        // Copy the elements from the list to the array
        for (int i : list) {
            arr[k++] = i;
        }
        
        // Return the array of numbers with no consecutive 1's
        return arr;
    }
}
