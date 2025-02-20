//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while(T-->0)
        {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for(int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            Solution ob = new Solution();
            int[] ans = ob.common_digits(nums);
            for(int i = 0; i < ans.length; i++)
                System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int[] common_digits(int[] nums) {
        Set<Integer> distinctDigits = new TreeSet<>();

        // Extract digits from each number and store in the set
        for (int num : nums) {
            int temp = num;
            while (temp > 0) {
                distinctDigits.add(temp % 10); // Extract last digit and add to set
                temp /= 10; // Remove last digit
            }
        }

        // Convert set to an array
        int[] result = new int[distinctDigits.size()];
        int index = 0;
        for (int digit : distinctDigits) {
            result[index++] = digit;
        }

        return result;
    }
}
