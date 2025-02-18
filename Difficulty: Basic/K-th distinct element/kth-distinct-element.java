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
            String a = br.readLine().trim();
            String[] a1 = a.split(" ");
            int n = Integer.parseInt(a1[0]);
            int k = Integer.parseInt(a1[1]);
            String b = br.readLine().trim();
            String[] b1 = b.split(" "); 
            int[] nums = new int[n];
            for(int i = 0; i < n; i++)
                nums[i] = Integer.parseInt(b1[i]);
            Solution ob = new Solution();
            int ans = ob.KthDistinct(nums,k);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution
{
    // Function to find the k-th distinct element in the array
    public int KthDistinct(int[] nums, int k)
    {
        // Create a LinkedHashMap to store the frequency of each element
        LinkedHashMap<Integer, Integer> hm = new LinkedHashMap<>();
        
        // Populate the map with the frequency of each element
        for(int i = 0; i < nums.length; i++) {
            hm.put(nums[i], hm.getOrDefault(nums[i], 0) + 1);
        }
        
        // If there are fewer than k distinct elements, return -1
        if (hm.size() < k) return -1;
        
        // Variable to count the number of distinct elements encountered
        int c = 0;
        
        // Variable to store the result (k-th distinct element)
        int ans = -1;
        
        // Iterate through the map and find the k-th distinct element
        for (Integer i : hm.keySet()) {
            // If the current element occurs exactly once
            if (hm.get(i) == 1) {
                c++; // Increment the count of distinct elements
            }
            
            // When the count reaches k, store the k-th distinct element
            if (c == k && hm.get(i) == 1) {
                ans = i;
                break;
            }
        }
        
        // Return the k-th distinct element
        return ans;
    }
}
