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
            String[] input = new String[3]; 
            input = br.readLine().split(" "); 
            int N = Integer.parseInt(input[0]); 
            int A = Integer.parseInt(input[1]); 
            int B = Integer.parseInt(input[2]); 
            Solution ob = new Solution();
            System.out.println(ob.numOfSteps(N, A, B));
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the number of steps
    public int numOfSteps(int N, int A, int B) {
        // If A is less than N and A is less than or equal to B, return -1
        if (A < N && A <= B)
            return -1;
        
        boolean stepForward = true;  // Variable to alternate the direction of steps
        int stepCount = 0;  // Counter to track the number of steps
        
        // Loop until N becomes zero or negative
        while (N > 0) {
            if (stepForward) {
                N -= A;  // Move forward by A steps
            } else {
                N += B;  // Move backward by B steps
            }
            
            stepForward = !stepForward;  // Alternate the step direction
            stepCount++;  // Increment the step count
        }
        
        return stepCount;  // Return the total number of steps taken
    }
}
