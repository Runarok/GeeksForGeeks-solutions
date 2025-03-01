//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String a[] = in.readLine().trim().split("\\s+");
            int N = Integer.parseInt(a[0]);
            int M = Integer.parseInt(a[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.rooms(N, M));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    // Function to calculate the number of rooms required
    static int rooms(int N, int M){
        // Initialize the multiplier and product (p)
        int i = 1;
        int p = M;
        
        // Loop to find the smallest multiple of M that is divisible by N
        while(true){
            p = M * i; // Multiply M by i to get the current multiple
            if(p % N == 0){  // Check if the product is divisible by N
                break;  // Exit the loop if the condition is satisfied
            }
            i++;  // Increment i to try the next multiple
        }
        
        // Calculate the result (number of rooms) using the derived value of p
        int n = N * M / p;  // Formula for the number of rooms
        return (N + M) / n;  // Return the calculated value
    }
}
