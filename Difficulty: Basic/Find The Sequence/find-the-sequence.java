//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            
            int N = sc.nextInt();
            Solution ob = new Solution();
            ArrayList<Long> a = ob.printSeries(N);
            for(int  i=0;i<N;i++){
                System.out.print(a.get(i)+" ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution{
    // Function to generate the series and return the first N numbers
    static ArrayList<Long> printSeries(int N){
        // Create an ArrayList to store the series
        ArrayList<Long> al = new ArrayList<>();
        
        // Initial values for the series
        al.add(1L); // First element
        al.add(2L); // Second element
        al.add(5L); // Third element
        
        // Loop to generate the rest of the series
        for(int i = 3; i < N; i++) {
            // Calculate the next number as the sum of the previous three elements
            long sum = al.get(i - 1) + al.get(i - 2) + al.get(i - 3);
            
            // Add the sum to the ArrayList
            al.add(sum);
        }
        
        // Return the generated series
        return al;
    }
}
