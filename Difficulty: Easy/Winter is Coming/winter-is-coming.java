//{ Driver Code Starts
//Initial Template for Java

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
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int n = Integer.parseInt(input[0]); 
            int k = Integer.parseInt(input[1]); 
            String input_line[] = br.readLine().trim().split("\\s+");
            int Arr[]= new int[n];
            for(int i = 0; i < n; i++)
                Arr[i] = Integer.parseInt(input_line[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.ableTorescue(Arr, n, k));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to determine if rescue is possible based on the conditions provided
    static int ableTorescue(int Arr[], int n, int k) {
        int life = k;  // Initialize life with the given value 'k'
        
        // Loop through each element in the array
        for (int i = 0; i < n; i++) {
            // If the current element is odd, reset the life to k
            if (Arr[i] % 2 != 0) {
                life = k;
            } else {
                // If the current element is even, decrement the life
                life--;
            }
            
            // If life goes below zero, break out of the loop
            if (life < 0)
                break;
        }
        
        // If life is below zero, return 0 (rescue not possible), else return 1 (rescue possible)
        if (life < 0) {
            return 0;
        } else {
            return 1;
        }
    }
}
