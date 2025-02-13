//{ Driver Code Starts
//Initial Template for Java


//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            String input_line[] = read.readLine().trim().split("\\s+");
            int  N = Integer.parseInt(input_line[0]);
            int  M = Integer.parseInt(input_line[1]);
            
            Solution ob = new Solution();
            int ans = ob.steppingNumbers(N, M);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}



// } Driver Code Ends

//User function Template for Java

class Solution{
    
    // Function to count the number of stepping numbers in the range [n, m]
    int steppingNumbers(int n, int m){
        // Initialize the count of stepping numbers
        int count = 0;
        
        // Check each starting digit from 0 to 9
        for(int i = 0; i <= 9; i++) {
            // Call helper function to check stepping numbers starting with 'i'
            count += helper(i, n, m);
        }
        
        return count;  // Return the total count of stepping numbers
    }

    // Helper function to generate stepping numbers and count those in the range [n, m]
    private int helper(int num, int n, int m){
        
        // Variable to store the count of valid stepping numbers
        int c = 0;
        
        // Queue for breadth-first search to explore all valid stepping numbers
        Queue<Integer> qu = new LinkedList<>();
        qu.offer(num);  // Start the queue with the initial number
        
        // Process the queue until it's empty
        while(!qu.isEmpty()){
           
            int curr = qu.poll();  // Dequeue the current number
            
            // If the current number is within the range [n, m], increment count
            if(curr >= n && curr <= m ){
                c++;           
            }
            
            // Skip further processing if the number is out of bounds
            if(curr == 0 || curr > m){
                continue;
            }
            
            // Get the last digit of the current number
            int rem = curr % 10, n1;
            
            // If last digit is not 9, create a new stepping number by adding 1 to it
            if(rem != 9){
                n1 = curr * 10 + rem + 1;
                qu.offer(n1);
            }
            
            // If last digit is not 0, create a new stepping number by subtracting 1 from it
            if(rem != 0){
                n1 = curr * 10 + rem - 1;
                qu.offer(n1);
            }
        }
        
        // Return the count of valid stepping numbers found
        return c;
    }
}
