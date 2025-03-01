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
            String s = br.readLine().trim();
            Solution ob = new Solution();
            String ans = ob.minimum_Number(s);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

//User function Template for Java

class Solution
{
    public String minimum_Number(String s)
    {
        // code here
        int nums[] = new int[s.length()];
        
        // Convert each character to its numeric value
        for(int i=0; i<s.length(); i++) {
            nums[i] = Character.getNumericValue(s.charAt(i));
        }
        
        // Sort the numeric values in ascending order
        Arrays.sort(nums);
        
        // If the smallest digit is 0, swap it with the first non-zero number
        for(int i=1; i<s.length(); i++) {
            if(nums[0] == 0) {
                int temp = nums[0];
                nums[0] = nums[i];
                nums[i] = temp;
            }
        }
        
        // Convert the sorted digits back to a string
        StringBuilder sbr = new StringBuilder();
        for(int i : nums) {
            sbr.append(i);
        }
        return sbr.toString();
    }
}
