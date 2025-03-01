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
            int N = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int[] ans = ob.permutaion(N);
            for(int i = 0; i < ans.length; i++)
                System.out.print(ans[i] + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends


class Solution {
    // Helper function to generate all permutations of a string
    // s: remaining string
    // t: current permutation
    // set: set to store unique permutations
    public void helper(String s, String t, Set<String> set) {
        if(s.equals("")) {
            set.add(t);  // Add the permutation to the set
            return;
        }
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            String left = s.substring(0, i);
            String right = s.substring(i+1);
            String rem = left + right;  // Remaining string after removing the character
            helper(rem, t + ch, set);  // Recurse to generate further permutations
        }
    }

    public int[] permutaion(int n) {
        // Initialize the result array
        int[] ans = new int[2];
        
        // Convert the number to a string to handle its digits
        String s = String.valueOf(n);
        
        // Create a set to store unique permutations
        Set<String> set = new HashSet<>();
        
        // Call helper function to generate permutations
        helper(s, "", set);
        
        // Calculate the sum of all unique permutations
        for(String perm : set) {
            ans[1] += Integer.parseInt(perm);
        }
        
        // Store the count of unique permutations
        ans[0] = set.size();
        
        return ans;
    }
}
