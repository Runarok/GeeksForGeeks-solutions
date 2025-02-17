//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

// } Driver Code Ends

// User function Template for Java
class Solution{
    static int orGate(int arr[], int N){
       int ans = 0;  // Initialize the result variable to store the OR result
       for(int a : arr){  // Loop through each element in the array
           ans = ans | a;  // Apply the bitwise OR operation between the current result and the element
       }
       return ans;  // Return the final result after processing all elements
    }
}
//{ Driver Code Starts.
class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
            String S[] = read.readLine().trim().split(" ");
            int arr[] = new int[N];
            for(int i =0;i<N;i++)
            {
                arr[i] = Integer.parseInt(S[i]);
            }
            Solution ob = new Solution();
            System.out.println(ob.orGate(arr,N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends