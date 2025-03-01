//{ Driver Code Starts
//Initial Template for Java

import java.util.*;

public class GFG
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        
        while (t-- > 0)
        {
            int n = sc.nextInt();
            
            int arr[] = new int[n];
            for (int i = 0;i < n;i++)
            {
                arr[i] = sc.nextInt();
            }
            
            Solution sol = new Solution();
            System.out.println(sol.solve(arr, n));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Solution 
{
    long solve(int arr[], int n)
    {
        // Create an array to store the frequency of elements
        long[] a = new long[100001];

        // Count the frequency of each element in the input array
        for(int i = 0; i < n; i++){
            a[arr[i]]++;
        }

        // Calculate the cumulative frequency up to each element
        for(int i = 1; i < 100001; i++){
            a[i] += a[i-1];
        }

        // Calculate the sum based on the cumulative frequency array
        long sum = 0;
        for(var e : arr){
            sum += a[e-1];  // Add the count of elements strictly smaller than each element
        }

        return sum;  // Return the final sum
    }
}
