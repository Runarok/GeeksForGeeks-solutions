//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();
        while(t-- > 0)
        {
            int N = scn.nextInt();

            Solution ob = new Solution();
            ArrayList<Integer> sum = ob.getSum(N);
            System.out.println(sum.get(0)+" "+sum.get(1));
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution{
    
    // Function to return the sum of even and odd numbers separately
    static ArrayList<Integer> getSum(int N){
        // Create an ArrayList to store the results
        ArrayList<Integer> result = new ArrayList<>();
        
        // Initialize the sum variables for even and odd numbers
        int evenSum = 0, oddSum = 0;
        
        // Iterate through numbers from 1 to N
        for(int i = 1; i <= N; i++){
            if(i % 2 == 0){
                evenSum += i;  // Add to evenSum if the number is even
            } else {
                oddSum += i;   // Add to oddSum if the number is odd
            }
        }
        
        // Add the results to the ArrayList
        result.add(evenSum);
        result.add(oddSum);
        
        // Return the result array with even and odd sums
        return result;
    }    
}