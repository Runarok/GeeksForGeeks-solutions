//{ Driver Code Starts
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
            int n = Integer.parseInt(br.readLine().trim());
            Solution ob = new Solution();
            int ans = ob.NthTerm(n);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

class Solution
{
    final int MODVALUE = 1000000007;
    
    // Function to find the nth term in a sequence, following the specified formula
    public int NthTerm(int n)
    {
        // Initialize the first term as 2
        double term = 2;
        
        // Iterate from 2 to n to compute the nth term based on the sequence's formula
        for (int currentIndex = 2; currentIndex <= n; ++currentIndex) {
            // Apply the formula: term = (term * currentIndex) % MODVALUE + 1
            term = (term % MODVALUE * currentIndex % MODVALUE) % MODVALUE + 1;
        }
        
        // Return the result as an integer after converting the term to an integer
        return (int)term;
    }
}
