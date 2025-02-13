//{ Driver Code Starts
//Initial Template for Java

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
            StringTokenizer st = new StringTokenizer(br.readLine());
            int n;
            n = Integer.parseInt(st.nextToken());
            int[] arr = IntArray.input(br, n);
            
            int k;
            k = Integer.parseInt(st.nextToken());
            
            Solution obj = new Solution();
            int res = obj.maxFrequency(arr, n, k);
            
            System.out.println(res);
            
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    public static int maxFrequency(int[] arr, int n, int k) {
        Arrays.sort(arr); // Step 1: Sort the array in ascending order
        
        int left = 0; // Left pointer for the sliding window
        long total = 0; // Stores the sum of elements in the current window
        int maxFreq = 0; // Stores the maximum frequency of any element

        // Iterate through the array using the right pointer
        for (int right = 0; right < arr.length; right++) {
            total += arr[right]; // Add the current element to the total sum
            
            // Step 2: Ensure the window is valid
            // The condition checks if we need more than 'k' operations to make all elements in the window equal to arr[right]
            while ((long)(right - left + 1) * arr[right] - total > k) {
                total -= arr[left]; // Remove the leftmost element from the sum
                left++; // Shrink the window from the left
            }
            
            // Step 3: Update the maximum frequency found so far
            maxFreq = Math.max(maxFreq, right - left + 1);
        }

        return maxFreq; // Return the highest possible frequency
    }
}
