//{ Driver Code Starts
import java.io.*;
import java.util.*;


class IntArray
{
    public static int[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        int[] a = new int[n];
        for(int i = 0; i < n; i++)
            a[i] = Integer.parseInt(s[i]);

        return a;
    }

    public static void print(int[] a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<Integer> a)
    {
        for(int e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            
            int[] nums = IntArray.input(br, n);
            
            
            int k;
            k = Integer.parseInt(br.readLine());
            
            Solution obj = new Solution();
            int res = obj.countSubarray(n, nums, k);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution {
    // Function to count the number of subarrays with exactly k odd numbers.
    public static int countSubarray(int n, int[] nums, int k) {
        // Initialize the result and a map to store the frequency of odd number counts
        int res = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Initially, we consider a subarray with zero odd numbers
        map.put(0, 1);
        
        // Variables to keep track of the number of odd numbers and the final answer
        int count = 0;
        int ans = 0;

        // Iterate through the given array
        for (int i = 0; i < n; i++) {
            // If the current number is odd, increment the odd number count
            if (nums[i] % 2 != 0) {
                count++;
            }
            
            // Add to the answer the frequency of (count - k) in the map
            ans += map.getOrDefault(count - k, 0);
            
            // Update the map with the current odd count
            map.put(count, map.getOrDefault(count, 0) + 1);
        }
        
        return ans;
    }
}
