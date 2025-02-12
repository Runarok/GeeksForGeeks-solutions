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
            String s = br.readLine().trim();
            String[] S = s.split(" ");
            int[] nums = new int[n];
            for(int i = 0; i < n; i++){
                nums[i] = Integer.parseInt(S[i]);
            }
            Solution ob = new Solution();
            int ans = ob.countTriplets(nums);
            System.out.println(ans);         
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to count the number of triplets in the array
    public int countTriplets(int[] nums) {
        int res = 0; // Initialize the result to store the count of triplets
        int[] smaller = new int[nums.length]; // Array to store count of smaller elements to the left of each element
        int[] larger = new int[nums.length];  // Array to store count of larger elements to the right of each element
        
        // Count the number of smaller elements to the left of each element
        for (int i = 1; i < nums.length; i++) {
            for (int j = i - 1; j > -1; j--) {
                if (nums[j] < nums[i]) smaller[i]++; // Increase count for smaller elements
            }
        }

        // Count the number of larger elements to the right of each element
        for (int i = 0; i < nums.length - 1; i++) {
            int temp = 0;

            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) temp++; // Increase count for larger elements
            }

            // Update the result by multiplying smaller count and larger count for each element
            res += smaller[i] * temp;
        }

        return res; // Return the total count of triplets
    }
}
